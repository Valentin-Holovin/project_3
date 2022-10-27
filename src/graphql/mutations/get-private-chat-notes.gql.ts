import { gql } from '@apollo/client';

import { NOTES_FRAGMENT } from '../fragments/notes-fragment.gql';

export const GET_PRIVATE_NOTES = gql`
  ${NOTES_FRAGMENT}
  mutation getPrivateChatNotes($id: Float!, $limit: Int, $offset: Int) {
    getOrCreatePrivateChat(userId: $id) {
      notes(limit: $limit, offset: $offset) {
        ...notesFragment
      }
    }
  }
`;
