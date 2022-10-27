import { gql } from '@apollo/client';

export const DELETE_SUBTASK = gql`
  mutation deleteSubtask($id: Int!) {
    deleteSubtask(id: $id)
  }
`;
