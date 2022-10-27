import React from 'react';

import { File, Maybe } from '../../graphql/generated';

type ContextProps = {
  chatId: Maybe<number> | undefined;
  id: Maybe<number> | undefined;
  files: File[];
  filesCount: number;
  loading: boolean;
  isFileLoading: boolean;
  handleLoadMore: () => Promise<void>;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
  handleLoadMoreLoading: boolean;
  stopHandleLoadMore: boolean;
  setStopHandleLoadMore: (value: boolean) => void;
  deleteFile: (fileId: number | string) => Promise<void>;
  handlePickFile: () => Promise<File | void>;
};

export const FilesContext = React.createContext<ContextProps>({
  chatId: null,
  id: null,
  files: [],
  filesCount: 0,
  loading: false,
  isFileLoading: false,
  handleLoadMore: async () => {},
  refreshing: false,
  handleOnRefetch: async () => {},
  handleLoadMoreLoading: false,
  stopHandleLoadMore: false,
  setStopHandleLoadMore: () => {},
  deleteFile: async () => {},
  handlePickFile: async () => {},
});

export function useFilesContext() {
  const filesContext = React.useContext(FilesContext);

  if (!filesContext) {
    throw new Error('useFilesContext must be used within a FilesProvider');
  }
  return filesContext;
}
