import { Invoice } from "@/domain/invoice";
import { csvToJSON, tsvToJSON } from "./json-transformer";
import { jsonToInvoice } from "./json-to-invoice";

export const getInvoicesFromSpreadsheet = async (
  spreadsheet: File
): Promise<Invoice[]> => {
  const isCSV: boolean = spreadsheet.name.trim().slice(-4) === ".csv";
  const isTSV: boolean = spreadsheet.name.trim().slice(-4) === ".tsv";
  let invoices: Invoice[] = [];
  await spreadsheet.text().then((spreadsheetText: string) => {
    const jsonObjects: object[] = isCSV
      ? csvToJSON(spreadsheetText)
      : isTSV
      ? tsvToJSON(spreadsheetText)
      : [];
    jsonObjects.forEach((jsonObject) => {
      const invoice: Invoice | undefined = jsonToInvoice(jsonObject);
      if (invoice) {
        invoices.push(invoice);
      }
    });
  });
  return invoices;
};
