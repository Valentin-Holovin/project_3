import { Box, Button, Center, HStack, Input } from 'native-base';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import {
  ArrowBackIcon,
  DeleteIcon,
  PlusIcon,
  RequestHandler,
  SearchIcon,
  UsersAvatar,
  UsersName,
} from '../../../components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants';
import { modalsProps, useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { User } from '../../../graphql/generated';
import {
  useAssignUserToTaskMutation,
  useDeassignUserFromTaskMutation,
  useDebounce,
  useGetAllUsersQuery,
} from '../../../hooks';
import { useGetTaskAssigneesQuery } from '../../../hooks/use-queries/use-get-task-assignees-query';
import { navigationRef } from '../../../navigation/root-navigation';
import { colors } from '../../../theme';

export const SetUsers = () => {
  const { handleChangeModal, setModalsProps, modalsProps } = useModalsContext();
  const { values } = modalsProps;

  const params: { taskId?: number; type?: string } | undefined =
    navigationRef.current?.getCurrentRoute()?.params;

  const taskId = params?.taskId;
  const type = params?.type;

  const [deassignUserFromTask] = useDeassignUserFromTaskMutation(Number(taskId));
  const [assignUserToTask] = useAssignUserToTaskMutation(Number(taskId));

  const { data: taskAssigneesData, loading: taskAssigneesLoading } = useGetTaskAssigneesQuery({
    variables: {
      id: Number(taskId),
      assigneesLimit: 50,
    },
    skip: type !== 'Task' && !taskId,
  });

  const [search, setSearch] = React.useState('');

  const { loading, data } = useGetAllUsersQuery({
    variables: {
      input: {
        offset: 0,
        limit: 30,
        search: useDebounce(search),
      },
    },
  });

  const handleDeleteUser = useCallback(
    (id: number) => {
      deassignUserFromTask({
        variables: {
          taskId: Number(taskId),
          userId: id,
        },
      });
    },
    [deassignUserFromTask, taskId],
  );
  const handleAddUser = useCallback(
    (id: number) => {
      assignUserToTask({
        variables: {
          taskId: Number(taskId),
          userId: id,
        },
      });
    },
    [assignUserToTask, taskId],
  );

  const keyExtractor = React.useCallback((item: User) => String(item?.id), []);

  const onChangeText = (value: string) => {
    setSearch(value);
  };

  const renderItem = React.useCallback(
    ({ item }: { item: User }) => {
      const isAssignFromTaskValue = (id: number) => {
        const index = (taskAssigneesData?.getTask?.assignees || [])?.findIndex(
          (user) => user?.id === id,
        );
        return index >= 0;
      };

      const isAssignFromTask = isAssignFromTaskValue(Number(item?.id));

      return (
        <HStack key={item?.id} style={styles.itemWrapper}>
          <UsersAvatar src={item?.image} />
          <UsersName name={item?.login} />
          {taskAssigneesData?.getTask?.maintainer?.id !== item?.id && (
            <Box ml='auto'>
              <TouchableOpacity
                onPress={() => {
                  if (isAssignFromTask) {
                    handleDeleteUser(Number(item?.id));
                  } else {
                    handleAddUser(Number(item?.id));
                  }
                }}
              >
                {isAssignFromTask ? (
                  <DeleteIcon fill={colors.primary['600']} size={4} />
                ) : (
                  <PlusIcon color={colors.primary['600']} size={4} />
                )}
              </TouchableOpacity>
            </Box>
          )}
        </HStack>
      );
    },
    [
      handleAddUser,
      handleDeleteUser,
      taskAssigneesData?.getTask?.assignees,
      taskAssigneesData?.getTask?.maintainer?.id,
    ],
  );

  const isLoading = taskAssigneesLoading || loading;
  const users =
    (data?.getAllUsers?.rows.filter(
      (user) => user?.id !== taskAssigneesData?.getTask?.maintainer?.id,
    ) as User[]) || [];

  return (
    <Box style={styles.wrapper}>
      {type === 'Task' && (
        <Box style={styles.inputWrapper}>
          <Input
            value={search}
            onChangeText={onChangeText}
            InputLeftElement={<SearchIcon size={4} ml={'2px'} mr={'4px'} />}
            placeholder={'Поиск пользователей'}
            placeholderTextColor={'primary.700'}
            fontWeight={300}
            fontSize={'lg'}
            w={'295px'}
            maxW={'100%'}
            borderWidth={'0'}
          />
        </Box>
      )}

      <RequestHandler loading={isLoading}>
        <>
          <FlatList data={users} renderItem={renderItem} keyExtractor={keyExtractor} />
          <Center mt={'20px'} mb={'15px'}>
            <Button
              variant={'black'}
              leftIcon={<ArrowBackIcon fill={colors.primary['100']} />}
              onPress={() => {
                setModalsProps((prevState: modalsProps) => ({
                  ...prevState,
                  values,
                }));
                handleChangeModal(Modals.USERS_OF_TASK);
              }}
            >
              К исполнителям
            </Button>
          </Center>
        </>
      </RequestHandler>
    </Box>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderBottomColor: colors.primary['600'],
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },
  itemWrapper: {
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: DEVICE_WIDTH - 40,
  },
  wrapper: {
    height: DEVICE_HEIGHT - 450,
    width: DEVICE_WIDTH - 40,
  },
});
