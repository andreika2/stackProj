import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDropDownChipsComponent } from '../shared-drop-down-chips.component';

describe('SharedDropDownChipsComponent', () => {
  let component: SharedDropDownChipsComponent;
  let fixture: ComponentFixture<SharedDropDownChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDropDownChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDropDownChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
