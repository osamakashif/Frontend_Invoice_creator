import { Invoice } from "@/domain/invoice";
import { BLANK_PDF, Template } from "@pdfme/common";
import { generate } from "@pdfme/generator";

export const validateOptions = (
  name: string,
  email: string,
  rate: number,
  hours: number
): boolean => {
  return (
    validateNotEmptyString(name) &&
    validateNotEmptyString(email) &&
    validateRate(rate) &&
    validateHours(hours)
  );
};

const validateRate = (rate: number): boolean => {
  return !(rate <= 0);
};

const validateHours = (hours: number): boolean => {
  return hours !== 0;
};

const validateNotEmptyString = (stringValue: string): boolean => {
  return stringValue.trim() !== "";
};

export const generateAndDisplayInvoicePDF = (invoice: Invoice) => {
  createInvoicePDF(invoice).then((pdf: Uint8Array) => {
    const blob = new Blob([pdf.buffer], { type: "application/pdf" });
    window.open(URL.createObjectURL(blob));
  });
};

export const createInvoicePDF = async (
  invoice: Invoice
): Promise<Uint8Array> => {
  const template: Template = {
    basePdf: BLANK_PDF,
    schemas: [
      {
        nameHeader: {
          type: "text",
          position: { x: 0, y: 0 },
          width: 40,
          height: 10,
        },
        name: {
          type: "text",
          position: { x: 40, y: 0 },
          width: 40,
          height: 10,
        },
        emailHeader: {
          type: "text",
          position: { x: 0, y: 10 },
          width: 40,
          height: 10,
        },
        email: {
          type: "text",
          position: { x: 40, y: 10 },
          width: 40,
          height: 10,
        },
        rateHeader: {
          type: "text",
          position: { x: 0, y: 20 },
          width: 40,
          height: 10,
        },
        rate: {
          type: "text",
          position: { x: 40, y: 20 },
          width: 40,
          height: 10,
        },
        hoursHeader: {
          type: "text",
          position: { x: 0, y: 30 },
          width: 40,
          height: 10,
        },
        hours: {
          type: "text",
          position: { x: 40, y: 30 },
          width: 40,
          height: 10,
        },
        preTaxHeader: {
          type: "text",
          position: { x: 0, y: 40 },
          width: 40,
          height: 10,
        },
        preTax: {
          type: "text",
          position: { x: 40, y: 40 },
          width: 40,
          height: 10,
        },
        taxHeader: {
          type: "text",
          position: { x: 0, y: 50 },
          width: 40,
          height: 10,
        },
        tax: {
          type: "text",
          position: { x: 40, y: 50 },
          width: 40,
          height: 10,
        },
        profitHeader: {
          type: "text",
          position: { x: 0, y: 60 },
          width: 40,
          height: 10,
        },
        profit: {
          type: "text",
          position: { x: 40, y: 60 },
          width: 40,
          height: 10,
        },
      },
    ],
  };
  const inputs = [
    {
      nameHeader: "Name: ",
      name: invoice.name,
      emailHeader: "Email: ",
      email: invoice.email,
      rateHeader: "Hourly rate: ",
      rate: invoice.rate.toString(),
      hoursHeader: "Hours: ",
      hours: invoice.hours.toString(),
      preTaxHeader: "Revenue: ",
      preTax: invoice.preTaxTotal.toString(),
      taxHeader: "Income tax: ",
      tax: invoice.incomeTax.toString(),
      profitHeader: "Income after tax: ",
      profit: invoice.profit.toString(),
    },
  ];
  return generate({ template, inputs });
};
