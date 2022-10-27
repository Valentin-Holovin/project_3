import { gql } from '@apollo/client';

export const DELETE_FILE = gql`
  mutation deleteFile($id: Float!) {
    deleteFile(id: $id) {
      status
    }
  }
`;
