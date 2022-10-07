import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerInfoUserPanelComponent } from '../answer-info-user-panel.component';

describe('AnswerInfoUserPanelComponent', () => {
  let component: AnswerInfoUserPanelComponent;
  let fixture: ComponentFixture<AnswerInfoUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerInfoUserPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerInfoUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
