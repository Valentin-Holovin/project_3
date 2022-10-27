import { gql } from '@apollo/client';

import { USER_FRAGMENT } from '../fragments/user-fragment.gql';

export const EDIT_USER = gql`
  ${USER_FRAGMENT}
  mutation editUser($data: EditUserInput!) {
    editUser(data: $data) {
      ...UserFragment
    }
  }
`;
