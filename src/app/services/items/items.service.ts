import { Injectable } from '@angular/core';
import { Cell } from 'src/app/components/models/cell/cell.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Array<Cell> = [
    { name: 'Water', volume: 1, color: '#0f5e9c', flowed: false, behavior: 0 },
    {
      name: 'Cavern',
      volume: 1,
      color: '#423735',
      flowed: false,
      behavior: -1,
    },
    { name: 'Sand', volume: 1, color: '#c2b280', flowed: false, behavior: 2 },
    { name: 'Wood', volume: 1, color: '#ba8c63', flowed: false, behavior: 1 },
    { name: 'Empty', volume: 1, color: '#fafafa', flowed: false, behavior: -1 },
    { name: 'Fire', volume: 1, color: '#e25822', flowed: false, behavior: 3 },
    {
      name: 'LightSmoke',
      volume: 1,
      color: '#9ea8a6',
      flowed: false,
      behavior: 4,
    },
    {
      name: 'DarkSmoke',
      volume: 1,
      color: '#534f44',
      flowed: false,
      behavior: 4,
    },
  ];

  constructor() {}

  public getItems(): Array<Cell> {
    return this.items;
  }
}
