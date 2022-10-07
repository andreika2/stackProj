import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMessagePanelComponent } from '../shared-message-panel.component';

describe('SharedMessagePanelComponent', () => {
  let component: SharedMessagePanelComponent;
  let fixture: ComponentFixture<SharedMessagePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedMessagePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMessagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
