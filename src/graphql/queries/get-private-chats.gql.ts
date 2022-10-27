import { gql } from '@apollo/client';

import { PRIVAT_CHATS_FRAGMENT } from '../fragments/privat-chats-fragment.gql';

export const GET_PRIVATE_CHATS = gql`
  ${PRIVAT_CHATS_FRAGMENT}
  query getPrivateChats($data: GetChatsInput!) {
    getPrivateChats(data: $data) {
      rows {
        ...privatChatsFragment
      }
      count
    }
  }
`;
