import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCellGridPanelComponent } from '../shared-cell-grid-panel.component';

describe('SharedCellGridPanelComponent', () => {
  let component: SharedCellGridPanelComponent;
  let fixture: ComponentFixture<SharedCellGridPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedCellGridPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedCellGridPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
