import { Box, Button, Center, Text } from 'native-base';
import React from 'react';

import { DeleteIcon } from '../../../components';
import { useModalsContext } from '../../../context/modal-context/modal-context';
import { useDeleteTaskMutation } from '../../../hooks';
import { navigationRef } from '../../../navigation/root-navigation';

export const DeleteTask = () => {
  const params: { id?: number } | undefined = navigationRef.current?.getCurrentRoute()?.params;

  const id = params?.id;
  const goBack = navigationRef.current?.goBack;
  const { handleChangeModal } = useModalsContext();

  const [deleteTask, { loading }] = useDeleteTaskMutation(Number(id));

  const handleDelete = async () => {
    await deleteTask({
      variables: {
        id: Number(id),
      },
    });
    handleChangeModal('');
    goBack && goBack();
  };

  return (
    <Box m={5}>
      <Center mt={4}>
        <Text fontWeight={'300'} fontSize={'16px'} mb={'16px'} textAlign='center'>
          Безвозвратно будут удалены все подзадачи, чаты, заметки и прикреплённые файлы.
        </Text>
        <Text fontWeight={'400'} fontSize={'16px'} mb={'36px'}>
          Продолжить?
        </Text>
        <Button
          isLoading={loading}
          leftIcon={<DeleteIcon color='primary.100' />}
          variant={'red'}
          onPress={() => handleDelete()}
        >
          Удалить задачу
        </Button>
      </Center>
    </Box>
  );
};
