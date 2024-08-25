"use client";
import { Invoice } from "@/domain/invoice";
import { generateAndDisplayInvoicePDF } from "@/utils/invoice-creation";
import { downloadSampleCSV } from "@/utils/sample-file";
import { getInvoicesFromSpreadsheet } from "@/utils/spreadsheet-handling";
import { ChangeEvent, MouseEvent, useRef } from "react";

export default function Group() {
  const fileInputReference = useRef<HTMLInputElement>(null);

  const triggerFileUpload = (clickEvent: MouseEvent<HTMLButtonElement>) => {
    clickEvent.preventDefault();
    if (fileInputReference && fileInputReference.current) {
      fileInputReference.current.click();
    }
  };

  const uploadFile = (uploadEvent: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = uploadEvent.target.files;
    if (!files) return;
    const spreadsheet: File = files[0];
    getInvoicesFromSpreadsheet(spreadsheet).then((invoices: Invoice[]) => {
      invoices.forEach((invoice: Invoice) => {
        // TO DO - Save all PDFs together somehow, maybe zip
        // console.log("Invoice", invoice);
        // generateAndDisplayInvoicePDF(invoice);
      });
    });
  };

  return (
    <main>
      <h1 className="text-4xl">Group invoicing</h1>
      <p>
        You can upload a CSV or TSV file to generate multiple invoices quickly.
      </p>
      <p>
        Here is a{" "}
        <a
          className="cursor-pointer underline hover-link"
          onClick={() => {
            downloadSampleCSV();
          }}
        >
          sample CSV
        </a>{" "}
        for you to try.
      </p>
      <div className="flex justify-center">
        <button
          className="tertiary-colour p-5 rounded-xl m-5 w-4/5 flex flex-col items-center"
          type="button"
          onClick={(clickEvent) => {
            triggerFileUpload(clickEvent);
          }}
        >
          <svg
            fill="currentColor"
            width="10vh"
            height="10vh"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488.9 488.9"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <path d="M411.448,100.9l-94.7-94.7c-4.2-4.2-9.4-6.2-14.6-6.2h-210.1c-11.4,0-20.8,9.4-20.8,20.8v330.8c0,11.4,9.4,20.8,20.8,20.8 h132.1v95.7c0,11.4,9.4,20.8,20.8,20.8s20.8-9.4,20.8-19.8v-96.6h132.1c11.4,0,19.8-9.4,19.8-19.8V115.5 C417.748,110.3,415.648,105.1,411.448,100.9z M324.048,70.4l39.3,38.9h-39.3V70.4z M378.148,331.9h-112.3v-82.8l17.7,16.3 c10,10,25,3.1,28.1-1c7.3-8.3,7.3-21.8-1-29.1l-52-47.9c-8.3-7.3-20.8-7.3-28.1,0l-52,47.9c-8.3,8.3-8.3,20.8-1,29.1 c8.3,8.3,20.8,8.3,29.1,1l17.7-16.3v82.8h-111.4V41.6h169.6v86.3c0,11.4,9.4,20.8,20.8,20.8h74.9v183.2H378.148z"></path>{" "}
          </svg>
          <p>Upload file</p>
        </button>
        <input
          ref={fileInputReference}
          type="file"
          accept=".csv,.tsv"
          hidden
          onChange={(uploadEvent) => {
            uploadFile(uploadEvent);
          }}
        />
      </div>
    </main>
  );
}
