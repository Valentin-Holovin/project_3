import { gql } from '@apollo/client';

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: Int!, $force: Boolean) {
    deleteProject(id: $id, force: $force)
  }
`;
