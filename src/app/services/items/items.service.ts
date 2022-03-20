import { Injectable } from '@angular/core';
import { Cell } from 'src/app/components/models/cell/cell.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Array<Cell> = [
    { name: 'Water', volume: 1, color: '#0f5e9c', flowed: false },
    { name: 'Cavern', volume: 1, color: '#423735', flowed: false },
    { name: 'Sand', volume: 1, color: '#c2b280', flowed: false },
    { name: 'Wood', volume: 1, color: '#ba8c63', flowed: false },
    { name: 'Empty', volume: 1, color: '#fafafa', flowed: false },
  ];

  constructor() {}

  public getItems(): Array<Cell> {
    return this.items;
  }
}
