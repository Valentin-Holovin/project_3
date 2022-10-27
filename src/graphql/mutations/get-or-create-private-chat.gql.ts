import { gql } from '@apollo/client';

import { CHAT_FRAGMENT } from '../fragments/chat-fragment.gql';

export const GET_OR_CREATE_PRIVATE_CHAT = gql`
  ${CHAT_FRAGMENT}
  mutation getOrCreatePrivateChat($userId: Float!, $offset: Int, $limit: Int) {
    getOrCreatePrivateChat(userId: $userId) {
      ...chatFragment
    }
  }
`;
