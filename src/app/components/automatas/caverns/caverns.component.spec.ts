import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavernsComponent } from './caverns.component';

describe('CavernsComponent', () => {
  let component: CavernsComponent;
  let fixture: ComponentFixture<CavernsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CavernsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CavernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
