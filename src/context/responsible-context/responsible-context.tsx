import React from 'react';

import { TasksListItemType } from '../../types/task';

type ContextProps = {
  handleLoadMoreLoading: boolean;
  handleLoadMore: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
  loading: boolean;
  data: TasksListItemType[] | null;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
};

export const ResponsibleContext = React.createContext<ContextProps>({
  handleLoadMoreLoading: false,
  data: null,
  loading: false,
  handleLoadMore: async () => {},
  setStopHandleLoadMore: () => {},
  refreshing: false,
  handleOnRefetch: async () => {},
});

export function useResponsibleContext() {
  const responsibleContext = React.useContext(ResponsibleContext);

  if (!responsibleContext) {
    throw new Error('useResponsibleContext must be used within a ResponsibleContext');
  }
  return responsibleContext;
}
