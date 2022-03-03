import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-dimensional-board',
  templateUrl: './two-dimensional-board.component.html',
  styleUrls: ['./two-dimensional-board.component.scss'],
})
export class TwoDimensionalBoardComponent implements OnInit {
  private _height!: number;
  private _width!: number;
  private _delay!: number;

  public cells!: number[][];
  public isStarted: boolean = false;

  @Input() public set height(value: number) {
    this._height = value;
    this.reset();
  }

  @Input() public set width(value: number) {
    this._width = value;
    this.reset();
  }

  @Input() public set delay(value: number) {
    this._delay = value;
    this.reset();
  }

  constructor() {}

  ngOnInit(): void {
    this.reset();
  }

  public reset(): void {
    this.cells = new Array<Array<number>>();
    for (let i = 0; i < this._height; i++) {
      const arr = new Array<number>(this._width).fill(0);
      this.cells.push(arr);
    }
  }

  public toggle(i: number, j: number): void {
    if (this.cells[i][j] === 0) this.cells[i][j] = 1;
    else this.cells[i][j] = 0;
  }

  public step(): void {
    const newCells = this.cells.map((value: Array<number>) =>
      value.map((num: number) => num)
    );
    let alive;
    for (let i = 0; i < this._height; i++) {
      for (let j = 0; j < this._width; j++) {
        alive = 0;
        if (this.cells[i - 1][j - 1]) ++alive;
        else if (this.cells[i - 1][j]) ++alive;
        else if (this.cells[i - 1][j + 1]) ++alive;
        else if (this.cells[i][j - 1]) ++alive;
        else if (this.cells[i][j + 1]) ++alive;
        else if (this.cells[i + 1][j - 1]) ++alive;
        else if (this.cells[i + 1][j]) ++alive;
        else if (this.cells[i + 1][j + 1]) ++alive;

        if (alive < 2 && this.cells[i][j] === 1) newCells[i][j] = 0;
        else if ((alive == 2 || alive == 3) && this.cells[i][j] === 1)
          newCells[i][j] = 1;
        else if (alive > 3 && this.cells[i][j] === 1) newCells[i][j] = 0;
        else if (alive === 3 && this.cells[i][j] === 0) newCells[i][j] = 1;
      }
    }
    this.cells = newCells;
  }

  public async start(): Promise<void> {
    this.isStarted = true;
    while (this.isStarted) {
      this.step();
      await this.sleep();
    }
  }

  public pause(): void {
    this.isStarted = false;
  }

  private async sleep(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this._delay));
  }
}
