import React from 'react';

import { Task } from '../../graphql/generated';

type ContextProps = {
  handleLoadMoreLoading: boolean;
  handleLoadMore: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
  loading: boolean;
  data: Task | null;
  myTasksList: (value: boolean) => void;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
};

export const MyTaskContext = React.createContext<ContextProps>({
  handleLoadMoreLoading: false,
  data: null,
  loading: false,
  handleLoadMore: async () => {},
  setStopHandleLoadMore: () => {},
  myTasksList: () => {},
  refreshing: false,
  handleOnRefetch: async () => {},
});

export function useMyTaskContext() {
  const myTaskContext = React.useContext(MyTaskContext);

  if (!myTaskContext) {
    throw new Error('useMyTaskContext must be used within a MyTaskProvider');
  }
  return myTaskContext;
}
