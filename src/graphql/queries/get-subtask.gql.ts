import { gql } from '@apollo/client';

export const GET_SUBTASK = gql`
  query getSubtask($id: Int!, $type: String) {
    getSubtask(id: $id, type: $type) {
      id
      createdAt
      updatedAt
      name
      number
      code
      chat {
        id
      }
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
      code
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
`;
