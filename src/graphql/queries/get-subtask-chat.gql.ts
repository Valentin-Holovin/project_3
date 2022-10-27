import { gql } from '@apollo/client';

import { CHAT_FRAGMENT } from '../fragments/chat-fragment.gql';

export const GET_SUBTASK_CHAT = gql`
  ${CHAT_FRAGMENT}
  query getSubtaskChat($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getSubtask(id: $id, type: $type) {
      id
      __typename
      chat {
        ...chatFragment
      }
    }
  }
`;
