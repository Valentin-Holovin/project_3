import { gql } from '@apollo/client';

import { NOTES_FRAGMENT } from '../fragments/notes-fragment.gql';

export const GET_TASK_NOTES = gql`
  ${NOTES_FRAGMENT}
  query getTaskNotes($id: Int!, $offset: Int, $limit: Int, $type: String) {
    getTask(id: $id, type: $type) {
      id
      notes(limit: $limit, offset: $offset) {
        ...notesFragment
      }
    }
  }
`;
