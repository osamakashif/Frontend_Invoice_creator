"use client";
import { Invoice } from "@/domain/invoice";
import { inputFormatDate } from "@/utils/date-formatter";
import { generateAndDisplayInvoicePDF } from "@/utils/invoice-creator";
import { validateOptions } from "@/utils/validators";
import { useEffect, useState } from "react";

export const IndividualTable = () => {
  const inputClassNames: string =
    "w-[40vh] max-w-[200px] min-[801px]:w-[80vh] min-[801px]: max-w-[750px]";
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
      <table className="border-separate border-spacing-2">
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                className={inputClassNames}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                className={inputClassNames}
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>
              <input
                className={inputClassNames}
                type="number"
                onChange={(event) => {
                  setRate(assignNumber(event.target.value));
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Hours</td>
            <td>
              <input
                className={inputClassNames}
                type="number"
                onChange={(event) => {
                  setHours(assignNumber(event.target.value));
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Start date</td>
            <td>
              <input
                className={inputClassNames}
                type="date"
                value={inputFormatDate(startDate)}
                onChange={(event) => {
                  setStartDate(new Date(event.target.value));
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>End date</td>
            <td>
              <input
                className={inputClassNames}
                type="date"
                value={inputFormatDate(endDate)}
                onChange={(event) => {
                  setEndDate(new Date(event.target.value));
                }}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
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
