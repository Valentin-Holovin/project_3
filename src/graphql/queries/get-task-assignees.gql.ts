import { gql } from '@apollo/client';

export const GET_TASK_ASSIGNEES = gql`
  query getTaskAssignees($id: Int!, $assigneesLimit: Int!) {
    getTask(id: $id) {
      id
      assignees(limit: $assigneesLimit) {
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
