import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDimensionalBoardComponent } from './one-dimensional-board.component';

describe('OneDimensionalBoardComponent', () => {
  let component: OneDimensionalBoardComponent;
  let fixture: ComponentFixture<OneDimensionalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDimensionalBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDimensionalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
