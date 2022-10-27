import { dateParse } from './date-parse';

export const formatToDateAndTime = (date?: string | null | number | Date) => {
  return `${dateParse(date).date} в ${dateParse(date).time}`;
};
