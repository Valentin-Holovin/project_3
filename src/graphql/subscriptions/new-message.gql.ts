import { gql } from '@apollo/client';

import { MESSAGE_FRAGMENT } from '../fragments/message-fragment.gql';

export const NEW_MESSAGE = gql`
  ${MESSAGE_FRAGMENT}
  subscription newMessage($chatId: Int!) {
    newMessage(chatId: $chatId) {
      ...messageFragment
    }
  }
`;
