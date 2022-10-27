import { gql } from '@apollo/client';

export const MESSAGE_FRAGMENT = gql`
  fragment messageFragment on Message {
    id
    text
    createdAt
    user {
      login
      image
      id
      onlineStatus
    }
  }
`;
