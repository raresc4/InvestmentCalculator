import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';
import { InvestmentsCalculatorService } from './services/investments-calculator.service';
import { AnnualData } from './types/annual-data';
import { InvestmentDetails } from './types/investment-details';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  opened = false;
  annualData?: AnnualData[];

  constructor(private investmentCalculator: InvestmentsCalculatorService) {}

  calculateInvestments(investmentDetails: InvestmentDetails) {
    this.opened = true;
    this.annualData =
      this.investmentCalculator.calculateInvestmentResults(investmentDetails);
  }
}
