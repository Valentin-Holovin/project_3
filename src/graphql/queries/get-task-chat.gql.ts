import { gql } from '@apollo/client';

export const GET_TASK_CHAT = gql`
  query getTaskChat($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getTaskChat: getTask(id: $id, type: $type) {
      id
      chat {
        messagesList(limit: $limit, offset: $offset) {
          count
          rows {
            isRead
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
        }
        id
      }
    }
  }
`;
