import React from 'react';

import { Maybe, Note } from '../../../graphql/generated';

type ContextProps = {
  id: Maybe<number> | undefined;
  chatId: Maybe<number> | undefined;
  notes: Note[];
  notesCount: number;
  loading: boolean;
  stopHandleLoadMore: boolean;
  handleLoadMoreLoading: boolean;
  createNoteLoading: boolean;
  handleLoadMore: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
  deleteNote: (nodeId: number) => Promise<void>;
  sendNote: (node: string) => Promise<boolean>;
};

export const SubtaskNotesContext = React.createContext<ContextProps>({
  id: null,
  chatId: null,
  notes: [],
  notesCount: 0,
  loading: false,
  stopHandleLoadMore: false,
  handleLoadMoreLoading: false,
  createNoteLoading: false,
  handleLoadMore: async () => {},
  setStopHandleLoadMore: () => {},
  deleteNote: async () => {},
  sendNote: async () => false,
});

export function useSubtaskNotesContext() {
  const subtaskNotesContext = React.useContext(SubtaskNotesContext);

  if (!subtaskNotesContext) {
    throw new Error('useSubtaskNotesContext must be used within a SubtaskNotesProvider');
  }
  return subtaskNotesContext;
}
