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

export const validateDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
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