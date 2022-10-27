import React from 'react';

import { Tag, Task } from '../../graphql/generated';
import { useGetMyTasksSubtasksQuery } from '../../hooks';
import { TasksListItemType } from '../../types/task';
import { MyTaskContext } from './my-task-context';

type Props = {
  children: React.ReactNode;
  filterTags: Tag[] | null;
};

export const MyTaskProvider = ({ children, filterTags }: Props) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState<boolean>(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const stopHandleLoadMore = React.useRef(false);

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const { data, fetchMore, loading, refetch } = useGetMyTasksSubtasksQuery({
    variables: {
      limit: 10,
      offset: 0,
      tagsId: filterTags || [],
    },
  });

  const myTasksList = () => {
    const myTasksListArray: TasksListItemType[] = [];
    tasks.map((task) => {
      myTasksListArray.push({
        id: task?.id,
        project: `${task.project.name} #${task?.project?.number}`,
        name: `${task?.name} #${task?.code}`,
        createdAt: task?.createdAt,
        parentId: task?.parentId || null,
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
    });
    return myTasksListArray;
  };

  const getMyTaskData = React.useCallback(
    async (offset: number) => {
      const data = await fetchMore({
        variables: {
          limit: 10,
          offset,
          tagsId: filterTags || [],
        },
      });
      setTasks((prevState) => [
        ...prevState,
        ...(data.data.getCurrentUser?.myTasksSubtasks as Task[]),
      ]);
    },
    [filterTags],
  );

  React.useEffect(() => {
    setTasks([]);
    getMyTaskData(0);
  }, [filterTags]);

  const annulState = React.useCallback(async () => {
    const data = await fetchMore({
      variables: {
        limit: 10,
        offset: 0,
        tagsId: filterTags || [],
      },
    });
    setTasks(data.data.getCurrentUser?.myTasksSubtasks as Task[]);
  }, [filterTags]);

  const handleOnRefetch = React.useCallback(async () => {
    try {
      setRefreshing(true);
      await annulState();
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if ((data?.getCurrentUser?.taskCount || 0) > (tasks.length || 0) && !handleLoadMoreLoading) {
        setHandleLoadMoreLoading(true);
        await getMyTaskData(tasks.length || 0);
        setHandleLoadMoreLoading(false);
      }
      stopHandleLoadMore.current = true;
    }
  };

  const value = {
    handleLoadMore,
    handleLoadMoreLoading,
    setStopHandleLoadMore,
    data: myTasksList(),
    loading,
    handleOnRefetch,
    refreshing,
  };

  return <MyTaskContext.Provider value={value}>{children}</MyTaskContext.Provider>;
};
