import { gql } from '@apollo/client';

export const READ_PROJECT_ACTIVITIES = gql`
  mutation readProjectActivities($taskId: Int, $subtaskId: Int) {
    readProjectActivities(taskId: $taskId, subtaskId: $subtaskId)
  }
`;
