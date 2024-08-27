export const inputFormatDate = (date: Date): string => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .split("T")[0];
};

const formattedDate = (date: Date): string => {
  return inputFormatDate(date).replaceAll("-", "/");
};

export const invoiceDateRange = (startDate: Date, endDate: Date): string => {
  return `${formattedDate(startDate)} - ${formattedDate(endDate)}`;
};
