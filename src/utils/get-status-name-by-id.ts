import { STATUSES_COLORS } from '../constants';

export const getStatusNameById = (statusId?: number) => {
  const findStatusInfo = STATUSES_COLORS.find((item) => item?.id === statusId);
  return findStatusInfo?.rusName;
};
