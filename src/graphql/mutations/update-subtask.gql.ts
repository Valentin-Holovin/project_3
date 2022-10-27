import { gql } from '@apollo/client';

export const UPDATE_SUBTASK = gql`
  mutation updateSubtask($data: UpdateSubtaskInput!, $id: Int!) {
    updateSubtask(data: $data, id: $id) {
      id
      name
      status {
        id
        color
      }
      author {
        id
        login
      }
      chat {
        id
      }
      maintainer {
        id
        login
        image
      }
      task {
        id
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
