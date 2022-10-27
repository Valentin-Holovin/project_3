import { useNavigation } from '@react-navigation/core';
import { Box, HStack, Menu, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ROUTES } from '../../../constants';
import { modalsProps, useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { UserRole } from '../../../graphql/generated';
import { useAuth } from '../../../hooks';
import { ChangeStatusIcon, DeleteTaskIcon, EditHeaderIcon, EditTaskIcon } from '../../icons';

export interface ITaskHeader {
  taskName?: string | null;
  code?: string | null;
  taskStatusColor?: string | null;
  type: 'Task';
  taskId: number | undefined;
  chatId?: number;
}

export const TaskHeader = ({ taskName, code, taskStatusColor, taskId, chatId }: ITaskHeader) => {
  const navigation = useNavigation();
  const { handleChangeModal, setModalsProps } = useModalsContext();
  const { currentUserData } = useAuth();

  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const openIsEditOpen = () => setIsEditOpen(true);
  const closeIsEditOpen = () => setIsEditOpen(false);

  const handleEdit = () => {
    navigation.navigate(ROUTES.createOrUpdateTask, {
      taskId: taskId || 0,
      type: 'Task',
    });
  };
  const handleEditStatus = () => {
    setModalsProps((prevState: modalsProps) => {
      return {
        ...prevState,
        chatId,
      };
    });
    handleChangeModal(Modals.TASK_STATUSES);
  };
  const handleDelete = () => {
    handleChangeModal(Modals.DELETE_TASK);
  };

  const isAdmin = currentUserData?.role === UserRole.Admin;
  const isNotUser = currentUserData?.role !== UserRole.User;

  return (
    <Box flex={1} position='relative'>
      <HStack justifyContent='space-between' alignItems='center' ml={3} mr='5px'>
        <HStack alignItems='center' h='full'>
          <Box borderRadius='6px' mr='6px' w='6px' h='full' bg={taskStatusColor} />
          <HStack alignItems='flex-end'>
            <Text fontSize='lg' maxWidth={190} noOfLines={2}>
              {taskName}
            </Text>
            <Text fontSize='lg' pl={1}>
              #{code}
            </Text>
          </HStack>
        </HStack>
        <HStack alignItems='center'>
          <Menu
            shadow={2}
            w='260'
            style={{
              marginRight: 10,
              paddingLeft: 10,
            }}
            isOpen={isEditOpen}
            onOpen={openIsEditOpen}
            onClose={closeIsEditOpen}
            trigger={(triggerProps) => {
              return (
                <TouchableOpacity activeOpacity={0.7} {...triggerProps}>
                  <EditHeaderIcon size={8} mr='5px' />
                </TouchableOpacity>
              );
            }}
          >
            <Menu.Item pb={3} pt={3} onPress={handleEditStatus}>
              <HStack alignItems='center'>
                <ChangeStatusIcon size={6} mr='10px' />
                <Text>Изменить статус</Text>
              </HStack>
            </Menu.Item>
            {isNotUser && (
              <Menu.Item pb={3} pt={3} onPress={handleEdit}>
                <HStack alignItems='center'>
                  <EditTaskIcon size={6} mr='10px' />
                  <Text>Редактировать</Text>
                </HStack>
              </Menu.Item>
            )}

            {isAdmin && (
              <Menu.Item pb={3} pt={3} onPress={handleDelete}>
                <HStack alignItems='center'>
                  <DeleteTaskIcon size={6} mr='10px' />
                  <Text color='simpleColors.red'>Удалить</Text>
                </HStack>
              </Menu.Item>
            )}
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};
