import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-dimensional',
  templateUrl: './one-dimensional.component.html',
  styleUrls: ['./one-dimensional.component.scss'],
})
export class OneDimensionalComponent implements OnInit {
  public size: number = 31;
  public rule: number = 30;
  public num: number = 32768;
  public delay: number = 1000;

  constructor() {}

  ngOnInit(): void {}

  public formatLabel(value: number): string {
    return `${value / 1000}s`;
  }
}
