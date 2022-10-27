import { gql } from '@apollo/client';

export const GET_TASK = gql`
  query getTask($id: Int!, $type: String) {
    getTask(id: $id, type: $type) {
      id
      chat {
        id
      }
      code
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
