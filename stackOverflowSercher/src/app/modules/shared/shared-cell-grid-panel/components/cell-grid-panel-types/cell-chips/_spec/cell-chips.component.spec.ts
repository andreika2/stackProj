import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellChipsComponent } from '../cell-chips.component';

describe('CellShipsComponent', () => {
  let component: CellChipsComponent;
  let fixture: ComponentFixture<CellChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
