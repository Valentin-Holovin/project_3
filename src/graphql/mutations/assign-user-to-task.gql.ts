import { gql } from '@apollo/client';

export const ASSIGN_USER_TO_TASK = gql`
  mutation assignUserToTask($taskId: Int!, $userId: Int!) {
    assignUserToTask(taskId: $taskId, userId: $userId) {
      id
      assignees {
        id
        login
        image
      }
      maintainer {
        id
        login
        image
      }
    }
  }
`;
