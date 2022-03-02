import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDimensionalComponent } from './one-dimensional.component';

describe('OneDimensionalComponent', () => {
  let component: OneDimensionalComponent;
  let fixture: ComponentFixture<OneDimensionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDimensionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDimensionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
