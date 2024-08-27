"use client";
import { Invoice } from "@/domain/invoice";
import { inputFormatDate } from "@/utils/date-formatter";
import { generateAndDisplayInvoicePDF } from "@/utils/invoice-creator";
import { validateOptions } from "@/utils/validators";
import { useEffect, useState } from "react";

export const IndividualTable = () => {
  const inputClassNames: string =
    "w-[40vh] max-w-[200px] min-[801px]:w-[80vh] min-[801px]:max-w-[750px]";
  const internalDivClassNames: string = "flex py-1 items-center";
  const externalDivClassNames: string = "flex flex-col py-3";
  const labelClassNames: string = "min-w-[7rem]";
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rate, setRate] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [validOptions, setValidOptions] = useState<boolean>(false);

  useEffect(() => {
    setValidOptions(
      validateOptions(name, email, rate, hours, startDate, endDate)
    );
  }, [
    name,
    email,
    rate,
    hours,
    startDate,
    endDate,
    validOptions,
    setValidOptions,
  ]);

  const assignNumber = (newValueString: string): number => {
    const newValue = parseFloat(newValueString);
    return isNaN(newValue) ? 0 : newValue;
  };

  return (
    <div className="flex flex-col items-center">
      <div className={externalDivClassNames}>
        <div className={internalDivClassNames}>
          <label htmlFor="name" className={labelClassNames}>
            Name
          </label>
          <input
            id="name"
            aria-label="name"
            alt="name"
            className={inputClassNames}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>
        <div className={internalDivClassNames}>
          <label htmlFor="email" className={labelClassNames}>
            Email
          </label>
          <input
            id="email"
            aria-label="email"
            alt="email"
            className={inputClassNames}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className={externalDivClassNames}>
        <div className={internalDivClassNames}>
          <label htmlFor="rate" className={labelClassNames}>
            Rate (JPY/hr)
          </label>
          <input
            id="rate"
            className={inputClassNames}
            aria-label="Rate in Japanese Yen per hour"
            alt="rate"
            type="number"
            onChange={(event) => {
              setRate(assignNumber(event.target.value));
            }}
          ></input>
        </div>
        <div className={internalDivClassNames}>
          <label htmlFor="hours" className={labelClassNames}>
            Hours
          </label>
          <input
            id="hours"
            className={inputClassNames}
            aria-label="hours"
            alt="hours"
            type="number"
            onChange={(event) => {
              setHours(assignNumber(event.target.value));
            }}
          ></input>
        </div>
      </div>
      <div className={externalDivClassNames}>
        <div className={internalDivClassNames}>
          <label htmlFor="startDate" className={labelClassNames}>
            Start date
          </label>
          <input
            id="startDate"
            className={inputClassNames}
            aria-label="start date"
            alt="start date"
            type="date"
            value={inputFormatDate(startDate)}
            onChange={(event) => {
              setStartDate(new Date(event.target.value));
            }}
          ></input>
        </div>
        <div className={internalDivClassNames}>
          <label htmlFor="endDate" className={labelClassNames}>
            End date
          </label>
          <input
            id="endDate"
            className={inputClassNames}
            aria-label="end date"
            alt="end date"
            type="date"
            value={inputFormatDate(endDate)}
            onChange={(event) => {
              setEndDate(new Date(event.target.value));
            }}
          ></input>
        </div>
      </div>
      <button
        className={
          "p-2 rounded-xl font-bold" +
          (validOptions ? " tertiary-colour" : " blocked-button")
        }
        onClick={() => {
          if (validOptions) {
            generateAndDisplayInvoicePDF(
              new Invoice(name, email, rate, hours, startDate, endDate)
            );
          }
        }}
      >
        Generate invoice
      </button>
    </div>
  );
};
