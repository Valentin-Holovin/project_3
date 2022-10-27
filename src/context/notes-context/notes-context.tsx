import React from 'react';

import { Maybe, Note } from '../../graphql/generated';

export type ContextProps = {
  id: Maybe<number> | undefined;
  chatId: Maybe<number> | undefined;
  notes: Note[];
  notesCount: number;
  loading: boolean;
  stopHandleLoadMore: boolean;
  handleLoadMoreLoading: boolean;
  createNoteLoading: boolean;
  refreshing: boolean;
  handleLoadMore: () => Promise<void>;
  handleOnRefetch: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
  deleteNote: (nodeId: number) => Promise<void>;
  sendNote: (node: string) => Promise<boolean>;
};

export const NotesContext = React.createContext<ContextProps>({
  id: null,
  chatId: null,
  notes: [],
  notesCount: 0,
  loading: false,
  stopHandleLoadMore: false,
  handleLoadMoreLoading: false,
  createNoteLoading: false,
  refreshing: false,
  handleLoadMore: async () => {},
  handleOnRefetch: async () => {},
  setStopHandleLoadMore: () => {},
  deleteNote: async () => {},
  sendNote: async () => false,
});

export function useNotesContext() {
  const notesContext = React.useContext(NotesContext);

  if (!notesContext) {
    throw new Error('useNotesContext must be used within a NotesProvider');
  }
  return notesContext;
}
