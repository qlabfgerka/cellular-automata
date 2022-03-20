import { Injectable } from '@angular/core';
import { Cell } from 'src/app/components/models/cell/cell.model';

@Injectable({
  providedIn: 'root',
})
export class FluidService {
  constructor() {}

  public handleWater(
    cells: Array<Array<Cell>>,
    newCells: Array<Array<Cell>>,
    items: Array<Cell>,
    i: number,
    j: number,
    waterThreshold: number
  ): void {
    if (cells[i + 1][j].name === items[4].name) {
      newCells[i][j] = Object.assign({}, items[4]);
      newCells[i + 1][j] = cells[i][j];
      newCells[i + 1][j].flowed = true;
    } else if (cells[i + 1][j].name === items[0].name) {
      if (cells[i + 1][j].volume! + cells[i][j].volume! >= waterThreshold) {
        const remainder = waterThreshold - cells[i + 1][j].volume!;
        newCells[i][j] = cells[i][j];
        newCells[i + 1][j] = cells[i + 1][j];
        newCells[i][j].volume = cells[i][j].volume! - remainder;
        newCells[i + 1][j].volume = cells[i + 1][j].volume! + remainder;
        newCells[i][j].flowed = true;
        newCells[i + 1][j].flowed = true;
      } else {
        newCells[i][j] = Object.assign({}, items[4]);
        newCells[i + 1][j] = cells[i + 1][j];
        newCells[i + 1][j].volume! += cells[i][j].volume!;
        newCells[i + 1][j].flowed = true;
      }
    } else newCells[i][j] = cells[i][j];

    if (newCells[i][j].volume === 0)
      newCells[i][j] = Object.assign({}, items[4]);

    if (
      (cells[i + 1][j].name === items[1].name ||
        cells[i + 1][j].name === items[0].name) &&
      newCells[i][j].name === items[0].name
    ) {
      if (
        (newCells[i][j - 1].name === items[4].name ||
          newCells[i][j - 1].name === items[0].name) &&
        !newCells[i][j - 1].flowed
      ) {
        if (newCells[i][j].volume! <= 0.25) return;
        if (this.handleFlow(cells, newCells, items, i, j - 1, false))
          newCells[i][j].volume! -= 0.25;
      }
      if (
        (newCells[i][j + 1].name === items[4].name ||
          newCells[i][j + 1].name === items[0].name) &&
        !newCells[i][j + 1].flowed
      ) {
        if (newCells[i][j].volume! <= 0.25) return;
        if (this.handleFlow(cells, newCells, items, i, j + 1, true))
          newCells[i][j].volume! -= 0.25;
      }
      newCells[i][j].flowed = true;
    }

    if (newCells[i][j].volume! > waterThreshold && !newCells[i - 1][j].flowed) {
      if (newCells[i - 1][j].name === items[0].name) {
        newCells[i - 1][j].volume! += newCells[i][j].volume! - waterThreshold;
      } else if (newCells[i - 1][j].name === items[4].name) {
        newCells[i - 1][j] = Object.assign({}, items[0]);
        newCells[i - 1][j].volume = newCells[i][j].volume! - waterThreshold;
      }
    }
  }

  private handleFlow(
    cells: Array<Array<Cell>>,
    newCells: Array<Array<Cell>>,
    items: Array<Cell>,
    i: number,
    j: number,
    right: boolean
  ): boolean {
    if (cells[i][j].name === items[4].name) {
      newCells[i][j] = Object.assign({}, items[0]);
      newCells[i][j].volume = 0.25;
      return true;
    } else if (
      right
        ? cells[i][j].name === items[0].name
        : newCells[i][j].name === items[0].name
    ) {
      newCells[i][j] = cells[i][j];
      newCells[i][j].volume! += 0.25;
      return true;
    }
    return false;
  }
}
