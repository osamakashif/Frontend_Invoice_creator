export class Invoice {
  name: string;
  email: string;
  rate: number;
  hours: number;
  preTaxTotal: number;
  incomeTax: number;
  profit: number;
  constructor(name: string, email: string, rate: number, hours: number) {
    this.name = name;
    this.email = email;
    this.rate = rate;
    this.hours = hours;
    this.preTaxTotal = rate * hours;
    this.incomeTax = this.calculateIncomeTax(this.preTaxTotal);
    this.profit = this.preTaxTotal - this.incomeTax;
  }

  private calculateIncomeTax = (revenue: number): number => {
    // TO DO
    return 0;
  };
}
