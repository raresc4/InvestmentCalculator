import { Component, Input } from '@angular/core';
import { AnnualData } from '../../types/annual-data';
import { InvestmentsCalculatorService } from '../../services/investments-calculator.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() annualData?: AnnualData[];

  constructor(private investmentCalculator: InvestmentsCalculatorService) {}
}
