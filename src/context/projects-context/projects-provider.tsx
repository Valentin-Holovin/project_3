import React from 'react';

import { Project, SortingField, SortingOrders } from '../../graphql/generated';
import { useGetProjectsQuery } from '../../hooks';
import { ProjectsContext } from './projects-context';

type IProps = {
  children?: React.ReactNode;
};

export const ProjectsProvider: React.FC<IProps> = ({ children }) => {
  const { data, loading, fetchMore, refetch } = useGetProjectsQuery({
    variables: {
      data: {
        limit: 15,
        offset: 0,
        sort: {
          field: SortingField.Number,
          type: SortingOrders.Asc,
        },
      },
      tasksData: {
        isTaskStorage: false,
      },
    },
  });

  const stopHandleLoadMore = React.useRef(false);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if (
        (data?.getProjects?.rows.length || 0) < (data?.getProjects.count || 0) &&
        !handleLoadMoreLoading
      ) {
        setHandleLoadMoreLoading(true);
        await fetchMore({
          variables: {
            data: {
              offset: data?.getProjects?.rows.length,
              limit: 15,
              sort: {
                field: SortingField.Number,
                type: SortingOrders.Asc,
              },
            },
          },
        });
        setHandleLoadMoreLoading(false);
      }

      stopHandleLoadMore.current = true;
    }
  };

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const value = {
    projects: (data?.getProjects?.rows || []) as Project[],
    projectsCount: data?.getProjects.count || 0,
    loading,

    handleLoadMore,
    handleLoadMoreLoading,
    stopHandleLoadMore: stopHandleLoadMore.current,
    setStopHandleLoadMore,

    refreshing,
    handleOnRefetch,
  };

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};
