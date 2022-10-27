import { gql } from '@apollo/client';

export const LOG_IN = gql`
  query loginUser($data: LoginUserInput!) {
    loginUser(data: $data) {
      user {
        login
      }
      token
    }
  }
`;
