import { gql } from '@apollo/client';

import { USER_FRAGMENT } from '../fragments/user-fragment.gql';

export const GET_ALL_USERS = gql`
  ${USER_FRAGMENT}
  query getAllUsers($input: GetUsersInput!) {
    getAllUsers(input: $input) {
      count
      rows {
        ...UserFragment
      }
    }
  }
`;
