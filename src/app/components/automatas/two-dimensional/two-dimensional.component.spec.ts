import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimensionalComponent } from './two-dimensional.component';

describe('TwoDimensionalComponent', () => {
  let component: TwoDimensionalComponent;
  let fixture: ComponentFixture<TwoDimensionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDimensionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDimensionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
