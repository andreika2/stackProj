import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProgressBarComponent } from '../shared-progress-bar.component';

describe('SharedProgressBarComponent', () => {
  let component: SharedProgressBarComponent;
  let fixture: ComponentFixture<SharedProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
