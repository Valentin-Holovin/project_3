import { ROUTES } from '../../constants';
import { GetProjectActivitiesQuery } from '../../graphql/generated';
import { getUpdatesVariableType } from '../../utils';

export const newActivityDto = (data: GetProjectActivitiesQuery | undefined) => {
  return data?.getProjectActivities
    ? data?.getProjectActivities?.map((item) => ({
        id: item.id,
        action: item.action,
        createdAt: item.createdAt,
        actioner: item.actioner,
        project: item.project,
        data: item.subtask || item.task,
        type: (item.subtask ? ROUTES.subtusk : ROUTES.task) as ROUTES.task | ROUTES.subtusk,
        typeValue: getUpdatesVariableType(item.subtask ? ROUTES.subtusk : ROUTES.task),
      }))
    : [];
};
