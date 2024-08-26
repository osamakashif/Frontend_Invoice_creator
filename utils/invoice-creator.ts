import { Invoice } from "@/domain/invoice";
import { createInvoicePDF } from "./pdf-generator";

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

export const generateMultiInvoicePDFZip = (invoices: Invoice[]) => {
  invoices.forEach((invoice: Invoice) => {
    createInvoicePDF(invoice).then((pdf: Uint8Array) => {
      // Add to zip file
    });
  });
};
