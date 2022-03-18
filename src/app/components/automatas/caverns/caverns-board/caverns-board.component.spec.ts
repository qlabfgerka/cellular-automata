import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavernsBoardComponent } from './caverns-board.component';

describe('CavernsBoardComponent', () => {
  let component: CavernsBoardComponent;
  let fixture: ComponentFixture<CavernsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CavernsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CavernsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
