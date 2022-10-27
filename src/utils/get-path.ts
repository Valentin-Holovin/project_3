import { BASE_URL } from '../constants';

export const getPath = (path: string | null | undefined) => {
  return path ? BASE_URL + path : path;
};
