import * as GENERATED from '../../graphql/generated/index';
import { GET_TASK_ASSIGNEES } from '../../graphql/queries/get-task-assignees.gql';

export const useAssignUserToTaskMutation = (taskId: number) => {
  const getTaskAssigneesVariables = {
    id: taskId,
    assigneesLimit: 50,
  };
  return GENERATED.useAssignUserToTaskMutation({
    update(cache, { data }) {
      if (!data?.assignUserToTask) {
        return null;
      }

      cache.updateQuery(
        {
          overwrite: true,
          query: GET_TASK_ASSIGNEES,
          variables: getTaskAssigneesVariables,
        },
        (oldData) => {
          if (!data) return;

          return {
            getTask: {
              ...oldData.getTask,
              assignees: data?.assignUserToTask?.assignees,
            },
          };
        },
      );
    },
  });
};
