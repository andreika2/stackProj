import { TestBed } from '@angular/core/testing';

import { SharedSearchPanelService } from '../shared-search-panel.service';

describe('SharedSearchPanelService', () => {
  let service: SharedSearchPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSearchPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
