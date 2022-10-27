import { gql } from '@apollo/client';

import { NOTES_FRAGMENT } from '../fragments/notes-fragment.gql';

export const GET_SUBTASK_NOTES = gql`
  ${NOTES_FRAGMENT}
  query getSubtaskNotes($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getSubtask(id: $id, type: $type) {
      id
      notes(limit: $limit, offset: $offset) {
        ...notesFragment
      }
    }
  }
`;
