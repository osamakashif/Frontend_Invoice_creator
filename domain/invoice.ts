interface TaxBracket {
  limit: number | undefined;
  rate: number;
}

export class Invoice {
  name: string;
  email: string;
  rate: number;
  hours: number;
  preTaxTotal: number;
  incomeTax: number;
  profit: number;
  startDate: Date;
  endDate: Date;
  constructor(
    name: string,
    email: string,
    rate: number,
    hours: number,
    startDate: Date,
    endDate: Date
  ) {
    this.name = name;
    this.email = email;
    this.rate = rate;
    this.hours = hours;
    this.preTaxTotal = rate * hours;
    this.incomeTax = this.calculateIncomeTax(this.preTaxTotal);
    this.profit = this.preTaxTotal - this.incomeTax;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  private calculateIncomeTax = (revenue: number): number => {
    let incomeTax: number = 0;
    let valueAlreadyTaxed: number = 0;
    let withinBracketCalculated: boolean = false;
    const taxBrackets: TaxBracket[] = [
      { limit: 1950000, rate: 0.05 },
      { limit: 3300000, rate: 0.1 },
      { limit: 6950000, rate: 0.2 },
      { limit: 9000000, rate: 0.23 },
      { limit: 18000000, rate: 0.33 },
      { limit: 40000000, rate: 0.4 },
      { limit: undefined, rate: 0.45 },
    ];
    taxBrackets.forEach((taxBracket: TaxBracket) => {
      if (withinBracketCalculated) {
        return;
      }
      const taxBracketRate: number = taxBracket.rate;
      if (taxBracket.limit) {
        const taxBracketLimit: number = taxBracket.limit;
        if (revenue < taxBracketLimit) {
          incomeTax += (revenue - valueAlreadyTaxed) * taxBracketRate;
          withinBracketCalculated = true;
          return;
        }
        incomeTax += (taxBracketLimit - valueAlreadyTaxed) * taxBracketRate;
        valueAlreadyTaxed += taxBracketLimit;
      } else {
        incomeTax += (revenue - valueAlreadyTaxed) * taxBracketRate;
      }
    });
    return incomeTax;
  };
}
