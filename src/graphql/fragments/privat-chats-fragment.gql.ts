import { gql } from '@apollo/client';

export const PRIVAT_CHATS_FRAGMENT = gql`
  fragment privatChatsFragment on User {
    __typename
    id
    login
    image
    role
    onlineStatus
    chats {
      id
      unreadMessagesCount
      name
    }
  }
`;
