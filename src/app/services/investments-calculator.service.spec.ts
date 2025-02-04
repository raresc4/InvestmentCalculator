import { TestBed } from '@angular/core/testing';

import { InvestmentsCalculatorService } from './investments-calculator.service';

describe('InvestmentsCalculatorService', () => {
  let service: InvestmentsCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentsCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
