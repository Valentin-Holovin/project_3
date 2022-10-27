export const checkValue = (value: number): string | number => {
  return value < 10 ? '0' + value : value;
};
