import { gql } from '@apollo/client';

import { MESSAGE_FRAGMENT } from '../fragments/message-fragment.gql';

export const READ_MESSAGE_BEFORE = gql`
  ${MESSAGE_FRAGMENT}
  subscription messagesReadBefore($chatId: Int!) {
    messagesReadBefore(chatId: $chatId) {
      message {
        ...messageFragment
      }
    }
  }
`;
