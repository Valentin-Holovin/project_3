import React from 'react';

import { SortingField, SortingOrders, Tag } from '../../graphql/generated/index';
import { useGetTasksSubtasksQuery } from '../../hooks';
import { TasksListItemType } from '../../types/task';
import { MyTasksAdminContext } from './my-tasks-admin-context';

type Props = {
  children: React.ReactNode;
  filterTags: Tag[] | null;
};

export const MyTasksAdminProvider = ({ children, filterTags }: Props) => {
  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState<boolean>(false);

  const stopHandleLoadMore = React.useRef(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const { data, fetchMore, loading, refetch } = useGetTasksSubtasksQuery({
    variables: {
      data: {
        limit: 10,
        offset: 0,
        tagsId: filterTags || [],
        sort: {
          type: SortingOrders.Desc,
          field: SortingField.StatusId,
        },
        isTaskStorage: false,
      },
    },
  });

  const allTasksList = () => {
    const allTasksListArray: TasksListItemType[] = [];

    if (data?.getTasksSubtasks?.rows)
      for (const task of data?.getTasksSubtasks?.rows || []) {
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

    // allTasksListArray.sort((a, b) => Number(b.status?.id) - Number(a.status?.id));
    return allTasksListArray;
  };

  const getAllTaskData = React.useCallback(async (offset: number) => {
    await fetchMore({
      variables: {
        data: {
          offset,
          limit: 10,
          tagsId: filterTags || [],
          sort: {
            type: SortingOrders.Desc,
            field: SortingField.StatusId,
          },
          isTaskStorage: false,
        },
      },
    });
  }, []);

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await refetch();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if (
        (data?.getTasksSubtasks.count || 0) > (data?.getTasksSubtasks?.rows.length || 0) &&
        !handleLoadMoreLoading
      ) {
        setHandleLoadMoreLoading(true);
        await getAllTaskData(data?.getTasksSubtasks?.rows.length || 0);
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

  return <MyTasksAdminContext.Provider value={value}>{children}</MyTasksAdminContext.Provider>;
};
