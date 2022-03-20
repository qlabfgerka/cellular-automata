import { Injectable } from '@angular/core';
import { Cell } from 'src/app/components/models/cell/cell.model';

@Injectable({
  providedIn: 'root',
})
export class WoodService {
  constructor() {}

  public handleWood(
    cells: Array<Array<Cell>>,
    newCells: Array<Array<Cell>>,
    items: Array<Cell>,
    i: number,
    j: number
  ): void {
    if (cells[i - 1][j].name === items[0].name) {
      newCells[i - 1][j] = Object.assign({}, cells[i][j]);
      newCells[i][j] = Object.assign({}, cells[i - 1][j]);
    } else if (cells[i + 1][j].name === items[4].name) {
      newCells[i + 1][j] = Object.assign({}, cells[i][j]);
      newCells[i][j] = Object.assign({}, cells[i + 1][j]);
    } else newCells[i][j] = cells[i][j];
  }
}
