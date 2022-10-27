export const dateParse = (data?: string | null | number | Date) => {
  if (data) {
    const date = new Date(Number(data) || data);
    const year = date.getFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();

    return {
      date: `${day >= 10 ? day : `0${day}`}-${month >= 10 ? month : `0${month}`}-${year}`,
      time: `${hours >= 10 ? hours : `0${hours}`}:${minute >= 10 ? minute : `0${minute}`}:${
        sec >= 10 ? sec : `0${sec}`
      }`,
    };
  }
  return {
    date: '',
    time: '',
  };
};
