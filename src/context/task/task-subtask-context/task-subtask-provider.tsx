import React from 'react';

import { Maybe, Subtask } from '../../../graphql/generated';
import { useGetTaskSubtaskQuery } from '../../../hooks';
import { TaskSubtaskContext } from './task-subtask-context';

type Props = {
  children: React.ReactNode;
  id?: Maybe<number>;
  chatId?: Maybe<number>;
};

export const TaskSubtaskProvider = ({ children, id, chatId }: Props) => {
  const { data, loading, refetch } = useGetTaskSubtaskQuery({
    variables: {
      id,
      type: 'taskSubtask',
    },
  });

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const stopHandleLoadMore = React.useRef(false);

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const handleLoadMore = async () => {};

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const value = {
    id,
    chatId,
    subtask: (data?.getTask.subtasks || []) as Subtask[],
    subtaskCount: data?.getTask.subtasks.length || 0,
    loading,
    handleLoadMore,
    setStopHandleLoadMore,
    handleOnRefetch,
    refreshing,
    stopHandleLoadMore: stopHandleLoadMore.current,
    handleLoadMoreLoading,
  };

  return <TaskSubtaskContext.Provider value={value}>{children}</TaskSubtaskContext.Provider>;
};
