import React from 'react';

import { Maybe, Note } from '../../../graphql/generated';

type ContextProps = {
  id: Maybe<number> | undefined;
  notes: Note[];
  notesCount: number;
  loading: boolean;
  stopHandleLoadMore: boolean;
  handleLoadMoreLoading: boolean;
  createNoteLoading: boolean;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
  handleLoadMore: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
  deleteNote: (nodeId: number) => Promise<void>;
  sendNote: (node: string) => Promise<boolean>;
};

export const PrivatNotesContext = React.createContext<ContextProps>({
  id: null,
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

export function usePrivatNotesContext() {
  const privatNotesContext = React.useContext(PrivatNotesContext);

  if (!privatNotesContext) {
    throw new Error('usePrivatNotesContext must be used within a PrivatNotesProvider');
  }
  return privatNotesContext;
}
