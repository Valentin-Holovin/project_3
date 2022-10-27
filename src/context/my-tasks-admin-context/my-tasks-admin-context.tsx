import React from 'react';

import { GetTasksSubtasksQuery } from '../../graphql/generated/index';

type ContextProps = {
  handleLoadMoreLoading: boolean;
  handleLoadMore: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
  loading: boolean;
  data: GetTasksSubtasksQuery | null;
  allTasksList: (value: boolean) => void;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
};

export const MyTasksAdminContext = React.createContext<ContextProps>({
  handleLoadMoreLoading: false,
  data: null,
  loading: false,
  handleLoadMore: async () => {},
  setStopHandleLoadMore: () => {},
  allTasksList: () => {},
  refreshing: false,
  handleOnRefetch: async () => {},
});

export function useMyTasksAdminContext() {
  const taskContext = React.useContext(MyTasksAdminContext);

  if (!taskContext) {
    throw new Error('MyTasksAdminProvider must be used within a TaskProvider');
  }

  return taskContext;
}
