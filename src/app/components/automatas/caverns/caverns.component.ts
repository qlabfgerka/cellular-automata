import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caverns',
  templateUrl: './caverns.component.html',
  styleUrls: ['./caverns.component.scss'],
})
export class CavernsComponent implements OnInit {
  public height: number = 20;
  public width: number = 40;
  public delay: number = 100;
  public genChance: number = 60;
  public genIterations: number = 5;
  public birthLimit: number = 4;
  public deathLimit: number = 4;

  public settingsVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public formatLabel(value: number): string {
    return `${value / 1000}s`;
  }

  public toggleVisibility(): void {
    this.settingsVisible = !this.settingsVisible;
  }
}
