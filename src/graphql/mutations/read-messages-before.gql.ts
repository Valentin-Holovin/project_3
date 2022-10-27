import { gql } from '@apollo/client';

export const READ_MESSAGES_BEFORE = gql`
  mutation readMessagesBefore($messageId: Int!) {
    readMessagesBefore(messageId: $messageId)
  }
`;
