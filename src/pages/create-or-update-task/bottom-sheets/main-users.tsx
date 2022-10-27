import { Box, HStack, Input } from 'native-base';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CrownIcon, RequestHandler, SearchIcon, UsersAvatar, UsersName } from '../../../components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants';
import { modalsProps, useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { User } from '../../../graphql/generated';
import { useCreateTaskContext, useDebounce, useGetAllUsersQuery } from '../../../hooks';
import { useGetTaskAssigneesQuery } from '../../../hooks/use-queries/use-get-task-assignees-query';
import { navigationRef } from '../../../navigation/root-navigation';
import { colors } from '../../../theme';

export const MainUser = () => {
  const { modalsProps, setModalsProps } = useModalsContext();

  const { values, setFieldValue } = modalsProps;

  const { handleChangeModal } = useModalsContext();
  const { loadingProjects } = useCreateTaskContext();

  const params: { taskId?: number; type?: string } | undefined =
    navigationRef.current?.getCurrentRoute()?.params;
  const taskId = params?.taskId;
  const type = params?.type;

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

  const { data: taskAssigneesData, loading: taskAssigneesLoading } = useGetTaskAssigneesQuery({
    variables: {
      id: Number(taskId),
      assigneesLimit: 50,
    },
  });

  const handleSetUser = useCallback(
    (user: User) => {
      const isEdittask = type === 'Task' && taskId;
      setFieldValue && setFieldValue('user', user);
      setModalsProps((prevState: modalsProps) => ({
        ...prevState,
        values: {
          ...values,
          user,
        },
      }));
      handleChangeModal(isEdittask ? Modals.USERS_OF_TASK : '');
    },
    [handleChangeModal, setFieldValue, taskId, type],
  );

  const keyExtractor = React.useCallback((item: User) => String(item?.id), []);

  const onChangeText = (value: string) => {
    setSearch(value);
  };

  const renderItem = React.useCallback(
    ({ item }: { item: User }) => (
      <TouchableOpacity
        onPress={() => {
          handleSetUser(item);
        }}
      >
        <HStack key={item?.id} style={styles.itemWrapper}>
          <UsersAvatar src={item?.image} />
          <UsersName name={item?.login} />
          <Box ml='auto'>
            <CrownIcon
              fill={
                values?.user?.id === item?.id ? colors.simpleColors.yellow : colors.primary['600']
              }
            />
          </Box>
        </HStack>
      </TouchableOpacity>
    ),
    [handleSetUser, values?.user?.id],
  );

  const isLoading = loading || loadingProjects || taskAssigneesLoading;
  const taskAssignees = [
    values?.user,
    ...((taskAssigneesData?.getTask?.assignees?.filter((user) => user?.id !== values?.user?.id) ||
      []) as User[]),
  ];

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
            // StyleSheet.create doesn`t work here
          />
        </Box>
      )}

      <RequestHandler loading={isLoading}>
        <FlatList
          data={(type === 'Task' ? (data?.getAllUsers?.rows as User[]) : taskAssignees) || []}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
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
    height: DEVICE_HEIGHT - 500,
    width: DEVICE_WIDTH - 40,
  },
});
