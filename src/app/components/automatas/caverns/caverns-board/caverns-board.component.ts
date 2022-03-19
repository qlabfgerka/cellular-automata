import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/components/models/cell/cell.model';
import { ItemsService } from 'src/app/services/items/items.service';
@Component({
  selector: 'app-caverns-board',
  templateUrl: './caverns-board.component.html',
  styleUrls: ['./caverns-board.component.scss'],
})
export class CavernsBoardComponent implements OnInit {
  //#region privates
  private _height!: number;
  private _width!: number;
  private _genChance!: number;
  private _genIterations!: number;
  private _birthLimit!: number;
  private _deathLimit!: number;
  private _delay!: number;
  private _waterThreshold!: number;
  //#endregion privates

  //#region publics
  public cells!: Array<Array<Cell>>;
  public items!: Array<Cell>;
  public isResetting!: boolean;
  public selectedItem: Cell;
  public volume: number = 1;
  public isStarted: boolean = false;
  //#endregion publics

  //#region setters
  @Input() public set height(value: number) {
    this._height = value;
  }

  @Input() public set width(value: number) {
    this._width = value;
  }

  @Input() public set genChance(value: number) {
    this._genChance = value;
  }

  @Input() public set genIterations(value: number) {
    this._genIterations = value + 2;
  }

  @Input() public set delay(value: number) {
    this._delay = value;
  }

  @Input() public set birthLimit(value: number) {
    this._birthLimit = value;
  }

  @Input() public set deathLimit(value: number) {
    this._deathLimit = value;
  }

  @Input() public set waterThreshold(value: number) {
    this._waterThreshold = value;
  }
  //#endregion setters

  constructor(private readonly itemsService: ItemsService) {
    this.items = this.itemsService.getItems();
    this.selectedItem = this.items[0];
  }

  ngOnInit(): void {
    this.reset();
  }

  public changeItem() {
    let index: number = this.items.indexOf(this.selectedItem);
    this.selectedItem = this.items[++index % this.items.length];
  }

  public async reset(): Promise<void> {
    if (this.isResetting) return;
    this.isResetting = true;
    let neighbours = 0;
    this.initCells();

    for (let iteration = 0; iteration < this._genIterations; iteration++) {
      const newCells = this.cells.map((row: Array<Cell>) =>
        row.map((cell: Cell) => cell)
      );
      for (let i = 1; i < this._height - 1; i++) {
        for (let j = 1; j < this._width - 1; j++) {
          neighbours = this.countNeighbours(i, j, this.items[1].name!);

          if (this.cells[i][j].name === this.items[1].name) {
            if (neighbours < this._deathLimit)
              newCells[i][j] = Object.assign({}, this.items[4]);
            else newCells[i][j] = Object.assign({}, this.items[1]);
          } else if (this.cells[i][j].name === this.items[4].name) {
            if (neighbours > this._birthLimit)
              newCells[i][j] = Object.assign({}, this.items[1]);
            else newCells[i][j] = Object.assign({}, this.items[4]);
          }
        }
      }
      await this.sleep();
      this.cells = newCells;
    }
    this.isResetting = false;
  }

  public setCell(i: number, j: number, event?: MouseEvent): void {
    if ((event && event.buttons === 1) || !event) {
      this.cells[i][j] = Object.assign({}, this.selectedItem);
      this.cells[i][j].volume = this.volume;
    } else if (event && event.buttons === 2) console.log(this.cells[i][j]);
  }

  public step(): void {
    /*const newCells = this.cells.map((row: Array<Cell>) =>
      row.map((cell: Cell) => {
        if (
          cell.name !== this.items[1].name &&
          cell.name !== this.items[4].name
        )
          return Object.assign({}, this.items[4]);
        else return cell;
      })
    );*/
    const newCells: Array<Array<Cell>> = new Array(this._height)
      .fill(Object.assign({}, this.items[4]))
      .map(() => new Array(this._width).fill(Object.assign({}, this.items[4])));
    for (let i = 0; i < this._height; i++) {
      for (let j = 0; j < this._width; j++) {
        if (this.cells[i][j].name === this.items[1].name)
          newCells[i][j] = Object.assign({}, this.items[1]);

        if (i >= 1 && j >= 1 && i < this._height - 1 && j < this._width - 1) {
          if (this.cells[i][j].name === this.items[0].name)
            this.handleWater(newCells, i, j);
        }
      }
    }
    this.cells.map((row) => row.map((cell: Cell) => (cell.flowed = false)));
    this.cells = newCells;
  }

  public async start(): Promise<void> {}

  public pause(): void {}

  private initCells(): void {
    this.cells = new Array<Array<Cell>>();
    for (let i = 0; i < this._height; i++) {
      this.cells[i] = new Array<Cell>();
      for (let j = 0; j < this._width; j++) {
        if (i == 0 || j == 0 || i == this._height - 1 || j == this._width - 1)
          this.cells[i].push(Object.assign({}, this.items[1]));
        else {
          if (this.getRandomIntInclusive(0, 100) < this._genChance)
            this.cells[i].push(Object.assign({}, this.items[4]));
          else this.cells[i].push(Object.assign({}, this.items[1]));
        }
      }
    }
  }

  private getRandomIntInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private countNeighbours(i: number, j: number, neighbour: string): number {
    let neighbours = 0;

    if (this.cells[i - 1][j - 1].name === neighbour) ++neighbours;
    if (this.cells[i - 1][j].name === neighbour) ++neighbours;
    if (this.cells[i - 1][j + 1].name === neighbour) ++neighbours;

    if (this.cells[i][j - 1].name === neighbour) ++neighbours;
    if (this.cells[i][j + 1].name === neighbour) ++neighbours;

    if (this.cells[i + 1][j - 1].name === neighbour) ++neighbours;
    if (this.cells[i + 1][j].name === neighbour) ++neighbours;
    if (this.cells[i + 1][j + 1].name === neighbour) ++neighbours;

    return neighbours;
  }

  private handleWater(
    newCells: Array<Array<Cell>>,
    i: number,
    j: number
  ): void {
    /*if (this.cells[i + 1][j].name !== this.items[1].name) {
      if (newCells[i + 1][j].name === this.items[0].name)
        newCells[i + 1][j].volume! += this.cells[i][j].volume!;
      else newCells[i + 1][j] = this.cells[i][j];
    } else if (newCells[i][j].name === this.items[0].name) {
      newCells[i][j].volume! += this.cells[i][j].volume!;
    } else newCells[i][j] = this.cells[i][j];*/
    if (this.cells[i + 1][j].name === this.items[4].name) {
      newCells[i][j] = Object.assign({}, this.items[4]);
      newCells[i + 1][j] = this.cells[i][j];
    } else if (this.cells[i + 1][j].name === this.items[0].name) {
      if (
        this.cells[i + 1][j].volume! + this.cells[i][j].volume! >=
        this._waterThreshold
      ) {
        const remainder = this._waterThreshold - this.cells[i + 1][j].volume!;
        newCells[i][j] = this.cells[i][j];
        newCells[i + 1][j] = this.cells[i + 1][j];
        newCells[i][j].volume = this.cells[i][j].volume! - remainder;
        newCells[i + 1][j].volume = this.cells[i + 1][j].volume! + remainder;
      } else {
        newCells[i][j] = Object.assign({}, this.items[4]);
        newCells[i + 1][j] = this.cells[i + 1][j];
        newCells[i + 1][j].volume! += this.cells[i][j].volume!;
      }
    } else newCells[i][j] = this.cells[i][j];

    if (newCells[i][j].volume === 0)
      newCells[i][j] = Object.assign({}, this.items[4]);

    if (
      (this.cells[i + 1][j].name === this.items[1].name ||
        this.cells[i + 1][j].name === this.items[0].name) &&
      newCells[i][j].name === this.items[0].name
    ) {
      if (
        (newCells[i][j - 1].name === this.items[4].name ||
          newCells[i][j - 1].name === this.items[0].name) &&
        !newCells[i][j - 1].flowed
      ) {
        if (newCells[i][j].volume! <= 0.25) return;
        if (this.handleFlow(newCells, i, j - 1, false))
          newCells[i][j].volume! -= 0.25;
      }
      if (
        (newCells[i][j + 1].name === this.items[4].name ||
          newCells[i][j + 1].name === this.items[0].name) &&
        !newCells[i][j + 1].flowed
      ) {
        if (newCells[i][j].volume! <= 0.25) return;
        if (this.handleFlow(newCells, i, j + 1, true))
          newCells[i][j].volume! -= 0.25;
      }
      newCells[i][j].flowed = true;
    }

    if (newCells[i][j].volume! > this._waterThreshold) {
      if (newCells[i - 1][j].name === this.items[0].name) {
        newCells[i - 1][j].volume! +=
          newCells[i][j].volume! - this._waterThreshold;
      } else if (newCells[i - 1][j].name !== this.items[1].name) {
        newCells[i - 1][j] = Object.assign({}, this.items[0]);
        newCells[i - 1][j].volume =
          newCells[i][j].volume! - this._waterThreshold;
      }
    }
  }

  private handleFlow(
    newCells: Array<Array<Cell>>,
    i: number,
    j: number,
    right: boolean
  ): boolean {
    if (this.cells[i][j].name === this.items[4].name) {
      newCells[i][j] = Object.assign({}, this.items[0]);
      newCells[i][j].volume = 0.25;
      return true;
    } else if (
      right
        ? this.cells[i][j].name === this.items[0].name
        : newCells[i][j].name === this.items[0].name
    ) {
      newCells[i][j] = this.cells[i][j];
      newCells[i][j].volume! += 0.25;
      return true;
    }
    return false;
  }

  private async sleep(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this._delay));
  }
}
