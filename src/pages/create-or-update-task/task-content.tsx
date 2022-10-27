import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { Formik, FormikValues } from 'formik';
import { Box, Button, Center, Text } from 'native-base';
import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';

import { RequestHandler, SaveIcon, TextField } from '../../components';
import { ROUTES } from '../../constants';
import { useAuthContext } from '../../context/auth-context';
import { TagType } from '../../context/task-context/task-provider';
import { Task, UserRole } from '../../graphql/generated';
import {
  useAlertMessage,
  useCreateTaskContext,
  useGetSubtaskQuery,
  useGetTaskQuery,
} from '../../hooks';
import { useCreateSubtaskMutation } from '../../hooks/use-mutations/use-create-subtask-mutation';
import { useCreateTaskMutation } from '../../hooks/use-mutations/use-create-task-mutation';
import { useUpdateSubtaskMutation } from '../../hooks/use-mutations/use-update-subtask-mutation';
import { useUpdateTaskMutation } from '../../hooks/use-mutations/use-update-task-mutation';
import { colors } from '../../theme';
import { MainStackParamList } from '../../types/navigations';
import { addTaskSchema } from '../../validation/schemas/task.schema';
import { BottomSheets } from './bottom-sheets/bottom-sheets';
import { TasksItems } from './task-items/tasks-items';

type RouteType = RouteProp<MainStackParamList, ROUTES.createOrUpdateTask>;

const getTasksQueryMessages = (
  type: string,
  taskId: number | undefined,
  subtaskId: number | undefined,
): { completed: string; error: string } => {
  if (type === 'Task' && !taskId) {
    return {
      completed: 'Задача успешно создана',
      error: 'Произошла ошибка при создании задачи',
    };
  } else if (type === 'Task' && taskId) {
    return {
      completed: 'Задача успешно отредактирована',
      error: 'Произошла ошибка при редактировании задачи',
    };
  } else if (type === 'Subtask' && !subtaskId) {
    return {
      completed: 'Подзадача успешно создана',
      error: 'Произошла ошибка при создании подзадачи',
    };
  } else {
    return {
      completed: 'Подзадача успешно отредактирована',
      error: 'Произошла ошибка при редактировании подзадачи',
    };
  }
};

const getTasksSubmitButtonTitle = (type: string, id: number | undefined) => {
  if (id) {
    return 'Сохранить';
  } else if (type === 'Task') {
    return 'Добавить задачу';
  } else {
    return 'Добавить подзадачу';
  }
};

export const TaskContent = () => {
  const route = useRoute<RouteType>();
  const taskId = route?.params?.taskId;
  const subtaskId = route?.params?.subtaskId;
  const type = route?.params?.type;

  const { currentUserData } = useAuthContext();

  const [createTask, { loading }] = useCreateTaskMutation();
  const [createSubtask, { loading: createSubtaskLoading }] = useCreateSubtaskMutation(
    Number(taskId),
  );
  const [updateTask, { loading: updateTaskLoading }] = useUpdateTaskMutation();
  const [updateSubtask, { loading: updateSubtaskLoading }] = useUpdateSubtaskMutation();

  const isSetTags = React.useRef(false);

  const { data: taskData, loading: taskLoading } = useGetTaskQuery({
    variables: {
      id: taskId,
      type: 'simple',
    },
    skip: !taskId,
  });

  const { data: subtaskData, loading: subtaskLoading } = useGetSubtaskQuery({
    variables: {
      id: subtaskId,
      type: 'simple',
    },
    skip: !subtaskId,
  });

  const { alertMessage } = useAlertMessage();
  const navigation = useNavigation();

  const { tags, setTags, isInitTags } = useCreateTaskContext();

  const taskInfo = taskData?.getTask;
  const subtaskInfo = subtaskData?.getSubtask;

  const initialValues = {
    title:
      taskId && type === 'Task'
        ? taskInfo?.name
        : // eslint-disable-next-line unicorn/no-nested-ternary
        subtaskId && type === 'Subtask'
        ? subtaskInfo?.name
        : '',
    tags: tags,
    project: taskId ? taskInfo?.project : null,
    user:
      taskId && type === 'Task'
        ? taskInfo?.maintainer
        : // eslint-disable-next-line unicorn/no-nested-ternary
        taskId && type === 'Subtask'
        ? subtaskInfo?.maintainer
        : null,
  };

  const queryMessage = getTasksQueryMessages(type, taskId, subtaskId);
  const submitButtonTitle = getTasksSubmitButtonTitle(type, taskId || subtaskId);

  const handleFormSubmit = async (values: FormikValues) => {
    Keyboard.dismiss();

    const tagsId = values.tags
      ?.filter((i: TagType) => i?.active)
      .map((tag: TagType) => String(tag?.id));

    try {
      if (taskId && type === 'Task') {
        updateTask({
          variables: {
            data: {
              name: values.title,
              maintainerId: values.user?.id || null,
              tagsId,
            },
            id: taskId,
          },
        });
      } else if (!taskId && type === 'Task') {
        await createTask({
          variables: {
            data: {
              name: values.title,
              projectId: +values.project?.id,
              statusId: 7,
              maintainerId: values.user?.id || currentUserData?.id,
              tagsId,
            },
          },
        });
      } else if (!subtaskId && type === 'Subtask') {
        await createSubtask({
          variables: {
            data: {
              name: values.title,
              parentId: Number(taskId),
              statusId: 7,
              tagsId,
              maintainerId: values.user?.id || taskInfo?.maintainer?.id,
            },
          },
        });
      } else {
        await updateSubtask({
          variables: {
            data: {
              name: values.title,
              maintainerId: values.user?.id || null,
              tagsId,
            },
            id: Number(subtaskId),
          },
        });
      }
      alertMessage({
        title: queryMessage.completed,
      });
    } catch {
      alertMessage({
        title: queryMessage.error,
      });
    }
    navigation.goBack();
  };

  useEffect(() => {
    if (isInitTags) {
      const newTagsArr = [...tags]?.map((tag) => {
        const currentTagsArray =
          type === 'Task' ? taskInfo?.tags?.rows || [] : subtaskInfo?.tags?.rows || [];

        const isActive = (currentTagsArray || [])?.findIndex((i) => i?.id === tag?.id) >= 0;

        return {
          ...tag,
          active: isActive,
        };
      });

      setTags(newTagsArr);
      isSetTags.current = true;
    }
  }, [taskData, subtaskData, taskId, subtaskId, type, isInitTags]);

  const isCreateUpdateLoading =
    loading || createSubtaskLoading || updateTaskLoading || updateSubtaskLoading;

  const isUpdate = (type === 'Task' && !!taskId) || (type === 'Subtask' && !!subtaskId);
  const isCreateSubtask = type === 'Subtask' && !subtaskId;

  return (
    <RequestHandler loading={taskLoading || subtaskLoading || !isSetTags || !isInitTags}>
      <Formik
        onSubmit={handleFormSubmit}
        validationSchema={addTaskSchema}
        initialValues={initialValues}
        enableReinitialize={isUpdate}
      >
        {({ handleSubmit, errors, submitCount }) => (
          <Box alignItems={'center'} marginX={'20px'} marginY={'30px'}>
            <TextField
              isDisabled={currentUserData?.role === UserRole.Moderator && isUpdate}
              name={'title'}
              placeholder={'Введите значение'}
              label={`Название ${type === 'Subtask' ? 'под' : ''}задачи`}
            />
            <TasksItems
              isUpdate={isUpdate}
              type={type}
              userRole={String(currentUserData?.role)}
              isCreateSubtask={isCreateSubtask}
            />

            {errors.project && submitCount > 0 && (
              <Text textAlign='center' color={colors.simpleColors.red} mb={1}>
                Необходимо выбрать проект
              </Text>
            )}

            <Center mt={'102px'}>
              <Button
                isLoading={isCreateUpdateLoading}
                leftIcon={<SaveIcon color='primary.100' />}
                variant={'black'}
                onPress={() => {
                  handleSubmit();
                }}
              >
                {submitButtonTitle}
              </Button>
            </Center>

            <BottomSheets />
          </Box>
        )}
      </Formik>
    </RequestHandler>
  );
};
