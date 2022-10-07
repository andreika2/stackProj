import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedGridPanelComponent } from '../shared-grid-panel.component';

describe('SharedGridPanelComponent', () => {
  let component: SharedGridPanelComponent;
  let fixture: ComponentFixture<SharedGridPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedGridPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedGridPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
