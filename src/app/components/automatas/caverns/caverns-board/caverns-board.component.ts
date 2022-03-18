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
  //#endregion privates

  //#region publics
  public cells!: Array<Array<Cell>>;
  public items!: Array<Cell>;
  public isResetting!: boolean;
  public selectedItem: Cell;
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
          neighbours = this.countNeighbours(i, j, this.items[1]);

          if (this.cells[i][j] === this.items[1]) {
            if (neighbours < this._deathLimit) newCells[i][j] = this.items[4];
            else newCells[i][j] = this.items[1];
          } else if (this.cells[i][j] === this.items[4]) {
            if (neighbours > this._birthLimit) newCells[i][j] = this.items[1];
            else newCells[i][j] = this.items[4];
          }
        }
      }
      await this.sleep();
      this.cells = newCells;
    }
    this.isResetting = false;
  }

  public setCell(i: number, j: number, event: MouseEvent): void {
    if (event.buttons === 1) this.cells[i][j] = this.selectedItem;
  }

  public step(): void {}

  public async start(): Promise<void> {}

  public pause(): void {}

  private initCells(): void {
    this.cells = new Array<Array<Cell>>();
    for (let i = 0; i < this._height; i++) {
      this.cells[i] = new Array<Cell>();
      for (let j = 0; j < this._width; j++) {
        if (i == 0 || j == 0 || i == this._height - 1 || j == this._width - 1)
          this.cells[i].push(this.items[1]);
        else {
          if (this.getRandomIntInclusive(0, 100) < this._genChance)
            this.cells[i].push(this.items[4]);
          else this.cells[i].push(this.items[1]);
        }
      }
    }
  }

  private getRandomIntInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private countNeighbours(i: number, j: number, neighbour: Cell): number {
    let neighbours = 0;

    if (this.cells[i - 1][j - 1] === neighbour) ++neighbours;
    if (this.cells[i - 1][j] === neighbour) ++neighbours;
    if (this.cells[i - 1][j + 1] === neighbour) ++neighbours;

    if (this.cells[i][j - 1] === neighbour) ++neighbours;
    if (this.cells[i][j + 1] === neighbour) ++neighbours;

    if (this.cells[i + 1][j - 1] === neighbour) ++neighbours;
    if (this.cells[i + 1][j] === neighbour) ++neighbours;
    if (this.cells[i + 1][j + 1] === neighbour) ++neighbours;

    return neighbours;
  }

  private async sleep(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this._delay));
  }
}
