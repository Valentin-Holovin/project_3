import { gql } from '@apollo/client';

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: Int!, $data: UpdateProjectInput!) {
    updateProject(id: $id, data: $data) {
      id
      createdAt
      updatedAt
      name
      number
    }
  }
`;
