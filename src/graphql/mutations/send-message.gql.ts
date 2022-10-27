import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation sendMessage($data: CreateMessageInput!) {
    sendMessage(data: $data) {
      id
      text
      isRead
      createdAt
      user {
        login
        image
      }
    }
  }
`;
