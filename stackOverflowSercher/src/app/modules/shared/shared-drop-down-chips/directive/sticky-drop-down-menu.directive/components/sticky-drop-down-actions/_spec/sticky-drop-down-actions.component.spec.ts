import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyDropDownActionsComponent } from '../sticky-drop-down-actions.component';

describe('StickyDropDownActionsComponent', () => {
  let component: StickyDropDownActionsComponent;
  let fixture: ComponentFixture<StickyDropDownActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyDropDownActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyDropDownActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
