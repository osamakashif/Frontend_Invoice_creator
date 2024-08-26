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
  let pdfs: Uint8Array[] = [];
  invoices.forEach(async (invoice: Invoice) => {
    await createInvoicePDF(invoice).then((pdf: Uint8Array) => {
      pdfs.push(pdf);
    });
  });
  let link = document.createElement("a");
  if (pdfs.length === 1) {
    const blob = new Blob([pdfs[0].buffer], { type: "application/pdf" });
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `${invoices[0].name}_-_Invoice.pdf`);
  }
  if (pdfs.length > 1) {
    // Add to zip file
    // const blob = new Blob([zippedFile], { type: "application/zip" });
    // link.setAttribute("href", URL.createObjectURL(blob));
    // link.setAttribute("download", `Invoices.zip`);
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
