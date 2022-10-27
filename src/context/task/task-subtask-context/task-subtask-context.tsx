import React from 'react';

import { Maybe, Subtask } from '../../../graphql/generated';

type ContextProps = {
  id: Maybe<number> | undefined;
  chatId: Maybe<number> | undefined;
  subtask: Subtask[];
  subtaskCount: number;
  loading: boolean;
  stopHandleLoadMore: boolean;
  handleLoadMoreLoading: boolean;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
  handleLoadMore: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
};

export const TaskSubtaskContext = React.createContext<ContextProps>({
  id: null,
  chatId: null,
  subtask: [],
  subtaskCount: 0,
  loading: false,
  stopHandleLoadMore: false,
  handleLoadMoreLoading: false,
  refreshing: false,
  handleOnRefetch: async () => {},
  handleLoadMore: async () => {},
  setStopHandleLoadMore: () => {},
});

export function useTaskSubtaskContext() {
  const taskSubtaskContext = React.useContext(TaskSubtaskContext);

  if (!taskSubtaskContext) {
    throw new Error('useTaskSubtaskContext must be used within a TaskSubtaskProvider');
  }
  return taskSubtaskContext;
}
