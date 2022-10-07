import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellUserComponent } from '../cell-user.component';

describe('CellUserComponent', () => {
  let component: CellUserComponent;
  let fixture: ComponentFixture<CellUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
