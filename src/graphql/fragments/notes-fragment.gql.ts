import { gql } from '@apollo/client';

export const NOTES_FRAGMENT = gql`
  fragment notesFragment on Note {
    __typename
    id
    createdAt
    chatId
    taskId
    content
    owner {
      id
      login
      image
      role
    }
  }
`;
