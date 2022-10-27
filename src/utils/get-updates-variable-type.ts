import { ROUTES } from '../constants';

type Props = ROUTES.subtusk | ROUTES.task;

export const getUpdatesVariableType = (type: Props) => {
  switch (type) {
    case ROUTES.subtusk:
      return 'subtaskId';

    case ROUTES.task:
      return 'taskId';

    default:
      return null;
  }
};
