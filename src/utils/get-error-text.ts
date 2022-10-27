import { ERROR_MESSAGES } from '../constants';

export const getErrorText = (errorMessage: string) => {
  return ERROR_MESSAGES[errorMessage] || 'Произошла ошибка';
};
