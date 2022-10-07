import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHtmlContentPanelComponent } from '../shared-html-content-panel.component';

describe('SharedHtmlContentPanelComponent', () => {
  let component: SharedHtmlContentPanelComponent;
  let fixture: ComponentFixture<SharedHtmlContentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedHtmlContentPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHtmlContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
