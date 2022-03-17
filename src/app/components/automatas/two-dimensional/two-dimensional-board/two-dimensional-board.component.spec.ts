import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimensionalBoardComponent } from './two-dimensional-board.component';

describe('TwoDimensionalBoardComponent', () => {
  let component: TwoDimensionalBoardComponent;
  let fixture: ComponentFixture<TwoDimensionalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDimensionalBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDimensionalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
