import { checkValue } from './checkValue';

export const getCurrentTime = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${checkValue(hours)}:${checkValue(minutes)}`;
};
