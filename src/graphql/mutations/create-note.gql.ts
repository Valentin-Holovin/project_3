import { gql } from '@apollo/client';

export const CREATE_NOTE = gql`
  mutation createNote($data: CreateNoteInput!) {
    createNote(data: $data) {
      id
      createdAt
      chatId
      taskId
      content
      ownerId
      owner {
        id
        login
        fullName
        image
        createdAt
        role
      }
    }
  }
`;
