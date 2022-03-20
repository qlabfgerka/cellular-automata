import { Injectable } from '@angular/core';
import { Cell } from 'src/app/components/models/cell/cell.model';

@Injectable({
  providedIn: 'root',
})
export class SandService {
  constructor() {}

  public handleSand(
    cells: Array<Array<Cell>>,
    newCells: Array<Array<Cell>>,
    items: Array<Cell>,
    i: number,
    j: number
  ): void {
    if (
      cells[i + 1][j].name === items[0].name ||
      cells[i + 1][j].name === items[4].name
    ) {
      newCells[i + 1][j] = Object.assign({}, cells[i][j]);
      newCells[i][j] = Object.assign({}, cells[i + 1][j]);
    } else if (
      cells[i + 1][j].name === items[2].name ||
      cells[i + 1][j].name === items[1].name
    ) {
      if (
        cells[i + 1][j - 1].name === items[4].name ||
        cells[i + 1][j - 1].name === items[0].name
      ) {
        newCells[i + 1][j - 1] = Object.assign({}, cells[i][j]);
        newCells[i][j] = Object.assign({}, cells[i + 1][j - 1]);
      } else if (
        cells[i + 1][j + 1].name === items[4].name ||
        cells[i + 1][j + 1].name === items[0].name
      ) {
        newCells[i + 1][j + 1] = Object.assign({}, cells[i][j]);
        newCells[i][j] = Object.assign({}, cells[i + 1][j + 1]);
      }
    }
  }
}
