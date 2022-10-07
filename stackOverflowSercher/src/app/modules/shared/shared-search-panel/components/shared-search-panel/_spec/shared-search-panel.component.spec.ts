import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSearchPanelComponent } from '../shared-search-panel.component';

describe('SharedSearchPanelComponent', () => {
  let component: SharedSearchPanelComponent;
  let fixture: ComponentFixture<SharedSearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSearchPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
