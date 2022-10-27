import React from 'react';

import { Project } from '../../graphql/generated';

type ContextProps = {
  projects: Project[];
  projectsCount: number;
  loading: boolean;
  handleLoadMore: () => Promise<void>;
  handleLoadMoreLoading: boolean;
  stopHandleLoadMore: boolean;
  setStopHandleLoadMore: (value: boolean) => void;
  refreshing: boolean;
  handleOnRefetch: () => Promise<void>;
};

export const ProjectsContext = React.createContext<ContextProps>({
  projects: [],
  projectsCount: 0,
  loading: false,
  handleLoadMore: async () => {},
  handleLoadMoreLoading: false,
  stopHandleLoadMore: false,
  setStopHandleLoadMore: () => {},
  refreshing: false,
  handleOnRefetch: async () => {},
});

export function useProjectsContext() {
  const projectsContext = React.useContext(ProjectsContext);

  if (!projectsContext) {
    throw new Error('useProjectsContext must be used within a ProjectsProvider');
  }
  return projectsContext;
}
