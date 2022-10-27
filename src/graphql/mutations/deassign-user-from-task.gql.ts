import { gql } from '@apollo/client';

export const DEASSIGN_USER_FROM_TASK = gql`
  mutation deassignUserFromTask($taskId: Int!, $userId: Int!) {
    deassignUserFromTask(taskId: $taskId, userId: $userId) {
      id
      assignees {
        id
        login
        image
      }
    }
  }
`;
