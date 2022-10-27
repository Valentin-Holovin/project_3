import { gql } from '@apollo/client';

export const DELETE_MESSAGE = gql`
  mutation deleteMessage($messageId: ID!) {
    deleteMessage(messageId: $messageId)
  }
`;
