import { gql } from '@apollo/client';

export const UPDATE_TASK = gql`
  mutation updateTask($data: UpdateTaskInput!, $id: Int!) {
    updateTask(data: $data, id: $id) {
      id
      chat {
        id
      }
      name
      status {
        id
        color
      }

      project {
        id
        number
        name
      }
      maintainer {
        id
        login
        image
      }
      tags {
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
`;
