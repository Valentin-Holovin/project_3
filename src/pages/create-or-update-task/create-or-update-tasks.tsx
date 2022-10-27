import { RouteProp, useRoute } from '@react-navigation/core';
import React from 'react';

import { Layout, ScreenHeader } from '../../components';
import { ROUTES } from '../../constants';
import { TaskProvider } from '../../context/task-context/task-provider';
import { MainStackParamList } from '../../types/navigations';
import { TaskContent } from './task-content';

const getTaskHeaderName = (
  type: string,
  taskId: undefined | number,
  subtaskId: undefined | number,
) => {
  if (type === 'Task' && !taskId) {
    return 'Создать задачу';
  } else if (type === 'Task' && taskId) {
    return 'Редактировать задачу';
  } else if (type === 'Subtask' && !subtaskId) {
    return 'Создать подзадачу';
  } else {
    return 'Редактировать подзадачу';
  }
};

type RouteType = RouteProp<MainStackParamList, ROUTES.createOrUpdateTask>;

export const CreateOrUpdateTask = () => {
  const route = useRoute<RouteType>();
  const taskId = route?.params?.taskId;
  const subtaskId = route?.params?.subtaskId;
  const type = route?.params?.type;

  const title = getTaskHeaderName(type, taskId, subtaskId);

  return (
    <Layout>
      <TaskProvider>
        <ScreenHeader type='Title' title={title} bg={type === 'Subtask' ? '#E4EFFF' : ''} />
        <TaskContent />
      </TaskProvider>
    </Layout>
  );
};
