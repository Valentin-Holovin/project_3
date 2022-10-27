import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const getMonth = (value) => {
  return format(new Date(value), 'LLLL', {
    locale: ru,
  });
};
