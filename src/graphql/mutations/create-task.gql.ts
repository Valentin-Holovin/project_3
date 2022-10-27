import { gql } from '@apollo/client';

import { TASKS_FRAGMENT } from '../fragments/tasks-fragment';

export const CREATE_TASK = gql`
  ${TASKS_FRAGMENT}
  mutation createTask($data: CreateTaskInput!) {
    createTask(data: $data) {
      ...tasksFragment
    }
  }
`;
