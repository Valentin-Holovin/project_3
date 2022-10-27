import React from 'react';

import { AllProjectActions } from '../../../constants';
import { Maybe, Note } from '../../../graphql/generated';
import { useGetTaskNotesQuery, useNotesManage } from '../../../hooks';
import { NotesProvider } from '../../notes-context/notes-provider';
import { TaskNotesContext } from './task-notes-context';

type Props = {
  children: React.ReactNode;
  taskId?: Maybe<number>;
  chatId?: Maybe<number>;
};

export const TaskNotesProvider = ({ children, taskId, chatId }: Props) => {
  const { data, loading, fetchMore } = useGetTaskNotesQuery({
    variables: {
      id: taskId || 0,
      offset: 0,
      limit: 15,
      type: 'node',
    },
  });

  const getPrivatNoteData = React.useCallback(
    async (offset: number) => {
      if (taskId) {
        const data = await fetchMore({
          variables: {
            id: taskId,
            offset,
            limit: 15,
            type: 'note',
          },
        });
        return data.data?.getTask?.notes || [];
      } else return [];
    },
    [taskId],
  );

  const { stopHandleLoadMore, ...notesData } = useNotesManage({
    getPrivatNoteData: getPrivatNoteData as (offset: number) => Promise<Note[]>,
    id: taskId,
    length: data?.getTask.notes.length || 0,
    type: AllProjectActions.task,
  });

  const value = {
    id: taskId,
    chatId,
    loading,
    ...notesData,
    stopHandleLoadMore: stopHandleLoadMore.current,
  };

  return (
    <TaskNotesContext.Provider value={value}>
      <NotesProvider value={value}>{children}</NotesProvider>
    </TaskNotesContext.Provider>
  );
};
