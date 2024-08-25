import { Invoice } from "@/domain/invoice";

export const jsonToInvoice = (json_data: object): Invoice | undefined => {
  let name: string = "";
  let email: string = "";
  let rate: number = 0;
  let hours: number = 0;
  try {
    const objectKeys = Object.keys(json_data);
    if (
      !objectKeys.includes("name") ||
      !objectKeys.includes("email") ||
      !objectKeys.includes("rate") ||
      !objectKeys.includes("hours")
    ) {
      return undefined;
    }
    name = json_data["name" as keyof object];
    email = json_data["email" as keyof object];
    rate = parseFloat(json_data["rate" as keyof object]);
    hours = parseFloat(json_data["hours" as keyof object]);
  } catch (e: unknown) {
    return undefined;
  }
  return new Invoice(name, email, rate, hours);
};
