import { Invoice } from "@/domain/invoice";
import { BLANK_PDF, Template } from "@pdfme/common";
import { generate } from "@pdfme/generator";

export const createInvoicePDF = async (
  invoice: Invoice
): Promise<Uint8Array> => {
  const template: Template = {
    basePdf: BLANK_PDF,
    schemas: [
      {
        Invoice_header: {
          type: "text",
          content: "Invoice",
          position: {
            x: 55.04,
            y: 10,
          },
          width: 100,
          height: 15,
          rotate: 0,
          alignment: "center",
          verticalAlignment: "middle",
          fontSize: 32,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#77428d",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        dateSpan: {
          type: "text",
          content: "Date_span",
          position: {
            x: 30.04,
            y: 30,
          },
          width: 150,
          height: 15,
          rotate: 0,
          alignment: "center",
          verticalAlignment: "middle",
          fontSize: 18,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#ffffff",
          backgroundColor: "#77428d",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        nameHeader: {
          type: "text",
          content: "Name:",
          position: {
            x: 30,
            y: 60,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#77428d",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        emailHeader: {
          type: "text",
          content: "Email:",
          position: {
            x: 30,
            y: 75,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#77428d",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        hourlyRateHeader: {
          type: "text",
          content: "Hourly rate:",
          position: {
            x: 30,
            y: 105,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#77428d",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        hoursHeader: {
          type: "text",
          content: "Hours:",
          position: {
            x: 30,
            y: 120,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#77428d",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        incomeAfterTaxHeader: {
          type: "text",
          content: "Income after tax:",
          position: {
            x: 30,
            y: 225,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        name: {
          type: "text",
          content: "name",
          position: {
            x: 80,
            y: 60,
          },
          width: 115,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        email: {
          type: "text",
          content: "email",
          position: {
            x: 80,
            y: 75,
          },
          width: 115,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        hourlyRate: {
          type: "text",
          content: "hourlyRate",
          position: {
            x: 80,
            y: 105,
          },
          width: 115,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        hours: {
          type: "text",
          content: "hours",
          position: {
            x: 80,
            y: 120,
          },
          width: 115,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        incomeAfterTax: {
          type: "text",
          content: "incomeAfterTax",
          position: {
            x: 80,
            y: 225,
          },
          width: 115,
          height: 10,
          rotate: 0,
          alignment: "center",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#ffffff",
          backgroundColor: "#77428d",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        incomeBeforeTaxHeader: {
          type: "text",
          content: "Income before tax:",
          position: {
            x: 30,
            y: 150,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#77428d",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        taxHeader: {
          type: "text",
          content: "Tax:",
          position: {
            x: 30,
            y: 165,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#77428d",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: true,
          fontName: "Roboto",
        },
        incomeBeforeTax: {
          type: "text",
          content: "incomeBeforeTax",
          position: {
            x: 80,
            y: 150,
          },
          width: 115,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        tax: {
          type: "text",
          content: "tax",
          position: {
            x: 80,
            y: 165,
          },
          width: 115,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "middle",
          fontSize: 15,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
      },
    ],
  };
  const inputs = [
    {
      dateSpan: "Date_span",
      name: invoice.name,
      email: invoice.email,
      hourlyRate: "¥ " + invoice.rate.toString() + "/hr",
      hours: invoice.hours.toString() + " hours",
      incomeBeforeTax: "¥ " + invoice.preTaxTotal.toString(),
      tax: "¥ " + invoice.incomeTax.toString(),
      incomeAfterTax: "¥ " + invoice.profit.toString(),
    },
  ];
  return generate({ template, inputs });
};
