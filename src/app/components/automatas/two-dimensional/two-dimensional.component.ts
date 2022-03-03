import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-dimensional',
  templateUrl: './two-dimensional.component.html',
  styleUrls: ['./two-dimensional.component.scss'],
})
export class TwoDimensionalComponent implements OnInit {
  public height: number = 15;
  public width: number = 15;
  public delay: number = 1000;

  constructor() {}

  ngOnInit(): void {}

  public formatLabel(value: number): string {
    return `${value / 1000}s`;
  }
}
