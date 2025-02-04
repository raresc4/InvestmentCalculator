import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentDetails } from '../../types/investment-details';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculateInvestments = new EventEmitter<InvestmentDetails>();

  investmentDetails: InvestmentDetails = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    years: 0,
  };

  onSubmit() {
    this.calculateInvestments.emit(this.investmentDetails);
  }
}
