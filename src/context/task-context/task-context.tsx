import React from 'react';

import { TagType } from './task-provider';

type ContextProps = {
  tags: TagType[];
  loadingTags: boolean;
  loadingProjects: boolean;
  setTags: (tags: TagType[]) => void;
  isInitTags: boolean;
};

export const CreateTaskContext = React.createContext<ContextProps>({
  tags: [],
  loadingTags: false,
  loadingProjects: false,
  setTags: () => {},
  isInitTags: false,
});

export function useCreateTaskContext() {
  const taskContext = React.useContext(CreateTaskContext);

  if (!taskContext) {
    throw new Error('useCreateTaskContext must be used within a TaskProvider');
  }
  return taskContext;
}
