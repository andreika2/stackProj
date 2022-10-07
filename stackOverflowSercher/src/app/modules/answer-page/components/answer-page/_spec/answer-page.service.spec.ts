import { TestBed } from '@angular/core/testing';

import { AnswerPageService } from '../answer-page.service';

describe('AnswerPageService', () => {
  let service: AnswerPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
