import { gql } from '@apollo/client';

export const REMOVE_NOTE = gql`
  mutation removeNote($id: Int!) {
    removeNote(id: $id)
  }
`;
