import React from 'react';

import { AllProjectActions } from '../../../constants';
import { Maybe, Note } from '../../../graphql/generated';
import { useGetSubtaskNotesQuery, useNotesManage } from '../../../hooks';
import { NotesProvider } from '../../notes-context/notes-provider';
import { SubtaskNotesContext } from './subtask-notes-context';

type Props = {
  children: React.ReactNode;
  subtaskId?: Maybe<number>;
  chatId?: Maybe<number>;
};

export const SubtaskNotesProvider = ({ children, subtaskId, chatId }: Props) => {
  const { data, loading, fetchMore } = useGetSubtaskNotesQuery({
    variables: {
      id: subtaskId || 0,
      offset: 0,
      limit: 15,
      type: 'node',
    },
  });

  const getPrivatNoteData = React.useCallback(
    async (offset: number) => {
      if (subtaskId) {
        const data = await fetchMore({
          variables: {
            id: subtaskId,
            offset,
            limit: 15,
            type: 'note',
          },
        });
        return data.data?.getSubtask?.notes || [];
      } else return [];
    },
    [subtaskId],
  );

  const { stopHandleLoadMore, ...notesData } = useNotesManage({
    getPrivatNoteData: getPrivatNoteData as (offset: number) => Promise<Note[]>,
    id: subtaskId,
    length: data?.getSubtask.notes.length || 0,
    type: AllProjectActions.subtask,
  });

  const value = {
    id: subtaskId,
    chatId,
    loading,
    ...notesData,
    stopHandleLoadMore: stopHandleLoadMore.current,
  };

  return (
    <SubtaskNotesContext.Provider value={value}>
      <NotesProvider value={value}>{children}</NotesProvider>
    </SubtaskNotesContext.Provider>
  );
};
