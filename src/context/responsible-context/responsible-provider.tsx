import React from 'react';

import { MyProject, SortingField, SortingOrders, Tag, Task } from '../../graphql/generated';
import { useGetMyProjectsRoleMaintainerQuery } from '../../hooks';
import { TasksListItemType } from '../../types/task';
import { ResponsibleContext } from './responsible-context';

type Props = {
  children: React.ReactNode;
  filterTags: Tag[] | null;
};

export const ResponsibleProvider = ({ children, filterTags }: Props) => {
  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState<boolean>(false);

  const stopHandleLoadMore = React.useRef(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const { data, fetchMore, loading, refetch } = useGetMyProjectsRoleMaintainerQuery({
    variables: {
      data: {
        limit: 10,
        offset: 0,
        // tagsId: filterTags || [],
        sort: {
          field: SortingField.Number,
          type: SortingOrders.Asc,
        },
      },
      tagsId: filterTags || [],
    },
  });

  const allTasksList = () => {
    const allTasksListArray: TasksListItemType[] = [];

    for (const project of (data?.getMyProjectsRoleMaintainer?.rows || []) as MyProject[]) {
      for (const task of (project?.myTaskSubTaskList?.rows || []) as Task[]) {
        allTasksListArray.push({
          id: task?.id,
          project: `${task?.project?.name} #${task?.project?.number}`,
          name: `${task?.name} #${task?.code}`,
          createdAt: task?.createdAt,
          isSubtask: task?.parentId ? true : false,
          status: {
            id: task?.status?.id,
            color: task?.status?.color,
          },
          maintainer: {
            id: task?.maintainer?.id,
            login: task?.maintainer?.login,
            image: task?.maintainer?.image,
          },
          tags: task?.tags.rows,
        });
      }
    }

    allTasksListArray.sort((a, b) => Number(b.status) - Number(a.status));
    return allTasksListArray;
  };

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const getAllTaskData = React.useCallback(async (offset: number) => {
    await fetchMore({
      variables: {
        data: {
          offset,
          limit: 10,
          sort: {
            field: SortingField.Number,
            type: SortingOrders.Asc,
          },
          // tagsId: filterTags || [],
        },
        tagsId: filterTags || [],
      },
    });
  }, []);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if (
        data &&
        Number(data?.getMyProjectsRoleMaintainer?.count) >
          Number(data?.getMyProjectsRoleMaintainer?.rows?.length) &&
        !handleLoadMoreLoading
      ) {
        setHandleLoadMoreLoading(true);

        await getAllTaskData(data?.getMyProjectsRoleMaintainer?.rows.length || 0);
        setHandleLoadMoreLoading(false);
      }
      stopHandleLoadMore.current = true;
    }
  };

  const value = {
    handleLoadMore,
    handleLoadMoreLoading,
    setStopHandleLoadMore,
    data: allTasksList(),
    loading,
    handleOnRefetch,
    refreshing,
  };

  return <ResponsibleContext.Provider value={value}>{children}</ResponsibleContext.Provider>;
};
