import { checkValue } from './checkValue';

export const millisecondsToDate = (timestamp: number) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${checkValue(day)}-${checkValue(month)}-${checkValue(year)}, ${checkValue(
    hour,
  )}:${checkValue(minute)}:${checkValue(second)}`;
};
