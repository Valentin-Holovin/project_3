import { gql } from '@apollo/client';

import { MESSAGE_FRAGMENT } from './message-fragment.gql';

export const CHAT_FRAGMENT = gql`
  ${MESSAGE_FRAGMENT}
  fragment chatFragment on Chat {
    id
    messagesList(limit: $limit, offset: $offset) {
      count
      rows {
        isRead
        ...messageFragment
      }
    }
  }
`;
