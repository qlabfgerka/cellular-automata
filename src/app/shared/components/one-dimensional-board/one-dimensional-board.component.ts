import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-dimensional-board',
  templateUrl: './one-dimensional-board.component.html',
  styleUrls: ['./one-dimensional-board.component.scss'],
})
export class OneDimensionalBoardComponent implements OnInit {
  private _size!: number;
  private _rule!: number;
  private _num!: number;
  private _delay!: number;

  public cells!: Array<Array<number>>;
  public isStarted: boolean = false;

  @Input() public set size(value: number) {
    this._size = value;
    this.reset();
  }

  @Input() public set rule(value: number) {
    this._rule = value;
    this.reset();
  }

  @Input() public set num(value: number) {
    this._num = value;
    this.reset();
  }

  @Input() public set delay(value: number) {
    this._delay = value;
  }

  constructor() {}

  ngOnInit(): void {
    this.reset();
  }

  public toggle(i: number, j: number): void {
    if (this.cells[i][j] === 0) this.cells[i][j] = 1;
    else this.cells[i][j] = 0;
  }

  public step(): void {
    const previous = this.cells[this.cells.length - 1];
    const next = new Array<number>(this._size);
    const bits = this.toBinary(this._rule, 8);

    let prevCell, currentCell, nextCell;

    for (let i = 0; i < this._size; i++) {
      prevCell = i === 0 ? previous[this._size - 1] : previous[i - 1];
      currentCell = previous[i];
      nextCell = i === this._size - 1 ? previous[0] : previous[i + 1];

      if (prevCell === 1 && currentCell === 1 && nextCell === 1)
        next[i] = +bits[0];
      else if (prevCell === 1 && currentCell === 1 && nextCell === 0)
        next[i] = +bits[1];
      else if (prevCell === 1 && currentCell === 0 && nextCell === 1)
        next[i] = +bits[2];
      else if (prevCell === 1 && currentCell === 0 && nextCell === 0)
        next[i] = +bits[3];
      else if (prevCell === 0 && currentCell === 1 && nextCell === 1)
        next[i] = +bits[4];
      else if (prevCell === 0 && currentCell === 1 && nextCell === 0)
        next[i] = +bits[5];
      else if (prevCell === 0 && currentCell === 0 && nextCell === 1)
        next[i] = +bits[6];
      else if (prevCell === 0 && currentCell === 0 && nextCell === 0)
        next[i] = +bits[7];
    }

    this.cells.push(next);
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

  public reset(): void {
    this.cells = new Array<Array<number>>();
    const first = new Array<number>(this._size).fill(0);
    this.cells.push(first);
    this.setNumber();
  }

  private setNumber(): void {
    if (!this._num) return;
    const bits = this.toBinary(this._num, this._size);

    for (let i = 0; i < this._size; i++) {
      this.cells[0][i] = +bits[i];
    }
  }

  private toBinary(num: number, size: number): string {
    let bits: string = '';

    for (let i = size - 1; i >= 0; i--) {
      bits += (num >> i) & 0x1;
    }

    return bits;
  }

  private async sleep(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this._delay));
  }
}
