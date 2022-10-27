import { Box, FlatList, HStack, Text } from 'native-base';
import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { DEVICE_WIDTH, StatusColorType, STATUSES_COLORS } from '../../../constants';
import { useModalsContext } from '../../../context/modal-context/modal-context';
import { useAlertMessage } from '../../../hooks';
import { useUpdateTaskMutation } from '../../../hooks/use-mutations/use-update-task-mutation';
import { navigationRef } from '../../../navigation/root-navigation';
import { colors } from '../../../theme';
import { getStatusColor } from '../../../utils';

type Props = {
  statusId: number;
};

export const StatusesTask = ({ statusId }: Props) => {
  const { handleChangeModal } = useModalsContext();
  const { alertMessage } = useAlertMessage();

  const params: { id?: number } | undefined = navigationRef.current?.getCurrentRoute()?.params;

  const id = params?.id;

  const [updatetask] = useUpdateTaskMutation();

  const keyExtractor = React.useCallback((item: StatusColorType) => String(item?.id), []);

  const handleChangeStatus = useCallback(
    async (statusId: number) => {
      handleChangeModal('');
      try {
        await updatetask({
          variables: {
            id: Number(id),
            data: {
              statusId,
            },
          },
        });
        alertMessage({
          title: 'Статус задачи успешно изменён',
        });
      } catch {
        alertMessage({
          title: 'Произошла ошибка при редактировании статуса',
        });
      }
    },
    [alertMessage, handleChangeModal, id, updatetask],
  );

  const renderItem = React.useCallback(
    ({ item }: { item: StatusColorType }) => (
      <TouchableOpacity
        onPress={() => {
          handleChangeStatus(item.id);
        }}
      >
        <HStack
          key={item.id}
          style={[
            styles.itemWrapper,
            {
              backgroundColor: item.id === statusId ? colors.primary['500'] : undefined,
            },
          ]}
        >
          <Box
            style={[
              styles.itemStatusColor,
              {
                backgroundColor: getStatusColor(item?.id),
              },
            ]}
          />
          <Text ml='10px' fontSize={'16px'}>
            {item.rusName}
          </Text>
        </HStack>
      </TouchableOpacity>
    ),
    [handleChangeStatus, statusId],
  );

  return (
    <Box style={styles.wrapper}>
      <FlatList data={STATUSES_COLORS} renderItem={renderItem} keyExtractor={keyExtractor} />
    </Box>
  );
};

const styles = StyleSheet.create({
  itemStatusColor: {
    borderRadius: 3,
    height: 30,
    width: 6,
  },
  itemWrapper: {
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: DEVICE_WIDTH - 40,
  },
  wrapper: {
    width: DEVICE_WIDTH - 40,
  },
});
