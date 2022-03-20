import { Injectable } from '@angular/core';
import { Cell } from 'src/app/components/models/cell/cell.model';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor() {}

  public handleFire(
    cells: Array<Array<Cell>>,
    newCells: Array<Array<Cell>>,
    items: Array<Cell>,
    i: number,
    j: number
  ): void {
    if (cells[i + 1][j].name === items[4].name) {
      newCells[i + 1][j] = Object.assign({}, cells[i][j]);
      newCells[i][j] = Object.assign({}, cells[i + 1][j]);
    } else if (
      cells[i + 1][j].name === items[0].name ||
      cells[i + 1][j].name === items[1].name ||
      cells[i + 1][j].name === items[2].name
    ) {
      newCells[i][j] = Object.assign({}, items[6]);
    }
  }

  public handleLightSmoke(
    cells: Array<Array<Cell>>,
    newCells: Array<Array<Cell>>,
    items: Array<Cell>,
    i: number,
    j: number
  ): void {
    if (newCells[i - 1][j].name === items[4].name) {
      newCells[i - 1][j] = Object.assign({}, cells[i][j]);
      newCells[i][j] = Object.assign({}, cells[i - 1][j]);
    } else {
      newCells[i][j] = Object.assign({}, items[4]);
    }
  }
}
