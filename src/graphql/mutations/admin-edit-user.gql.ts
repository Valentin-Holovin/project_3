import { gql } from '@apollo/client';

import { USER_FRAGMENT } from '../fragments/user-fragment.gql';

export const ADMIN_EDIT_USER = gql`
  ${USER_FRAGMENT}
  mutation adminEditUser($data: EditStatusUserInput!) {
    adminEditUser(data: $data) {
      __typename
      status
      user {
        ...UserFragment
      }
    }
  }
`;
