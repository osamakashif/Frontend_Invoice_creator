export const inputFormatDate = (date: Date): string => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .split("T")[0];
};

export const invoiceDateRange = (startDate: Date, endDate: Date): string => {
  return `${inputFormatDate(startDate)} to ${inputFormatDate(endDate)}`;
};
