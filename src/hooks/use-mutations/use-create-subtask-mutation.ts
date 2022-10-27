import * as GENERATED from '../../graphql/generated/index';
import { GET_TASK_SUBTASK } from './../../graphql/queries/get-task-subtask.gql';

export const useCreateSubtaskMutation = (id: number) => {
  const getTaskSubtaskVariables = {
    id,
    type: 'taskSubtask',
  };
  return GENERATED.useCreateSubtaskMutation({
    update(cache, { data }) {
      if (!data?.createSubtask) {
        return null;
      }

      cache.updateQuery(
        {
          overwrite: true,
          query: GET_TASK_SUBTASK,
          variables: getTaskSubtaskVariables,
        },
        (oldData) => {
          if (!data) return;

          return {
            getTask: {
              ...oldData.getTask,
              subtasks: [...oldData.getTask.subtasks, data?.createSubtask],
            },
          };
        },
      );
    },
  });
};
