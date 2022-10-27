import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import {
  DeleteIcon,
  EditTaskIcon,
  PlusIcon,
  RequestHandler,
  UsersAvatar,
  UsersName,
} from '../../../components';
import { EmptyUserIcon } from '../../../components/user-image-with-status/empty-user-icon/empty-user-icon';
import { DEVICE_WIDTH } from '../../../constants';
import { modalsProps, useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { User } from '../../../graphql/generated';
import { useDeassignUserFromTaskMutation } from '../../../hooks';
import { useGetTaskAssigneesQuery } from '../../../hooks/use-queries/use-get-task-assignees-query';
import { navigationRef } from '../../../navigation/root-navigation';
import { colors } from '../../../theme';

export const Users = () => {
  const { handleChangeModal, modalsProps, setModalsProps } = useModalsContext();

  const { values, setFieldValue } = modalsProps;

  const params: { taskId?: number; type?: string } | undefined =
    navigationRef.current?.getCurrentRoute()?.params;

  const taskId = params?.taskId;
  const type = params?.type;

  const [deassignUserFromTask] = useDeassignUserFromTaskMutation(Number(taskId));

  const { data: taskAssigneesData, loading: taskAssigneesLoading } = useGetTaskAssigneesQuery({
    variables: {
      id: Number(taskId),
      assigneesLimit: 50,
    },
    skip: type !== 'Task' && !taskId,
  });

  const handleSetUsersModal = () => {
    handleChangeModal(Modals.SELECTION_USERS);
  };
  const handleDeleteUser = (id: number) => {
    deassignUserFromTask({
      variables: {
        taskId: Number(taskId),
        userId: id,
      },
    });
  };

  const keyExtractor = React.useCallback((item: User) => String(item?.id), []);

  const renderItem = React.useCallback(
    ({ item }: { item: User }) => (
      <HStack key={item?.id} style={styles.itemWrapper}>
        <UsersAvatar src={item?.image} />
        <UsersName name={item?.login} />
        {taskAssigneesData?.getTask?.maintainer?.id !== item?.id && (
          <Box ml='auto'>
            <TouchableOpacity onPress={() => handleDeleteUser(Number(item?.id))}>
              <DeleteIcon fill={colors.primary['600']} size={4} />
            </TouchableOpacity>
          </Box>
        )}
      </HStack>
    ),
    [taskAssigneesData?.getTask?.maintainer?.id],
  );

  const isLoading = taskAssigneesLoading;

  const taskAssignees = [
    ...(taskAssigneesData?.getTask?.assignees || []),
    taskAssigneesData?.getTask?.maintainer,
  ].filter((user) => user?.id !== values?.user?.id);

  return (
    <Box style={styles.wrapper}>
      <RequestHandler loading={isLoading}>
        <>
          <HStack style={styles.addUsersWrapper}>
            <EmptyUserIcon size={30} />
            <Text style={styles.addUsersTitle}>Добавить исполнителей</Text>
            <TouchableOpacity onPress={handleSetUsersModal}>
              <PlusIcon size={4} />
            </TouchableOpacity>
          </HStack>
          <HStack style={[styles.itemWrapper, styles.mainUserWrapper]}>
            <UsersAvatar src={values?.user?.image} />
            <UsersName name={values?.user?.login} />
            <Box ml='auto'>
              <TouchableOpacity
                onPress={() => {
                  setModalsProps((prevState: modalsProps) => ({
                    ...prevState,
                    values,
                    setFieldValue,
                  }));
                  handleChangeModal(Modals.SELECTION_MAIN_USER);
                }}
              >
                <EditTaskIcon size={4} />
              </TouchableOpacity>
            </Box>
          </HStack>
          <FlatList
            data={(taskAssignees as User[]) || []}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </>
      </RequestHandler>
    </Box>
  );
};

const styles = StyleSheet.create({
  addUsersTitle: {
    color: colors.primary['100'],
    fontSize: 16,
    marginRight: 'auto',
  },
  addUsersWrapper: {
    alignItems: 'center',
    backgroundColor: colors.primary['700'],
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: DEVICE_WIDTH - 40,
  },
  itemWrapper: {
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: DEVICE_WIDTH - 40,
  },
  mainUserWrapper: {
    borderBottomColor: colors.primary['500'],
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  wrapper: {
    width: DEVICE_WIDTH - 40,
  },
});
