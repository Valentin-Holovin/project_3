import { gql } from '@apollo/client';

export const LOGOUT = gql`
  mutation logout($data: LogoutUserInput!) {
    logout(data: $data)
  }
`;
