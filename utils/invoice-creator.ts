import { Invoice } from "@/domain/invoice";
import { createInvoicePDF } from "./pdf-generator";
import JSZip from "jszip";

export const generateAndDisplayInvoicePDF = (invoice: Invoice) => {
  createInvoicePDF(invoice).then((pdf: Uint8Array) => {
    const blob = new Blob([pdf.buffer], { type: "application/pdf" });
    window.open(URL.createObjectURL(blob));
  });
};

export const generateMultiInvoicePDFZip = async (invoices: Invoice[]) => {
  if (invoices.length === 1) {
    await createInvoicePDF(invoices[0]).then((pdf: Uint8Array) => {
      const blob = new Blob([pdf.buffer], { type: "application/pdf" });
      let link = document.createElement("a");
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", `${invoices[0].name}_-_Invoice.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  if (invoices.length > 1) {
    const zip = new JSZip();
    let savedNames: string[] = [];
    Promise.all(
      invoices.map((invoice) => {
        return createInvoicePDF(invoice);
      })
    ).then(async (pdfs) => {
      pdfs.forEach((pdf: Uint8Array, index: number) => {
        const name: string = invoices[index].name.trim();
        const pdfName: string =
          (savedNames.includes(name) ? `${name}_(${index})` : `${name}`) +
          "_-_Invoice.pdf";
        savedNames.push(name);
        zip.file(pdfName, pdf);
      });
      const zippedFile = await zip.generateAsync({ type: "blob" });
      const blob = new Blob([zippedFile], { type: "application/zip" });
      let link = document.createElement("a");
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", `Invoices.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
};
