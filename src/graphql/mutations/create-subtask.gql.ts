import { gql } from '@apollo/client';

export const CREATE_SUBTASK = gql`
  mutation createSubtask($data: CreateSubtaskInput!) {
    createSubtask(data: $data) {
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
`;
