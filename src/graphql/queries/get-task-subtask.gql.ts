import { gql } from '@apollo/client';

export const GET_TASK_SUBTASK = gql`
  query getTaskSubtask($id: Int!, $type: String, $subtaskStatusId: Int) {
    getTask(id: $id, type: $type) {
      id
      subtasks(
        data: { limit: 100, sort: { type: ASC, field: status }, statusId: $subtaskStatusId }
      ) {
        id
        createdAt
        updatedAt
        name
        number
        code
        task {
          id
          number
          code
          project {
            id
            number
          }
        }
        status {
          id
          color
        }
        author {
          id
          login
          image
        }
        maintainer {
          id
          login
          image
        }
        endDate
        tags(limit: 100) {
          count
          rows {
            id
            name
            color
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;
