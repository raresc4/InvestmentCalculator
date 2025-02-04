import { Injectable } from '@angular/core';
import { AnnualData } from '../types/annual-data';
import { InvestmentDetails } from '../types/investment-details';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsCalculatorService {
  calculateInvestmentResults(
    investmentDetails: InvestmentDetails
  ): AnnualData[] {
    const annualData = [];
    let investmentValue = investmentDetails.initialInvestment;

    for (let i = 0; i < investmentDetails.years; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investmentDetails.expectedReturn / 100);
      investmentValue +=
        interestEarnedInYear + investmentDetails.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentDetails.annualInvestment * year -
        investmentDetails.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentDetails.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investmentDetails.initialInvestment +
          investmentDetails.annualInvestment * year,
      });
    }

    return annualData;
  }
}
