import { Box, Button, Center, Text } from 'native-base';
import React from 'react';

import { DeleteIcon } from '../../components';
import { useModalsContext } from '../../context/modal-context/modal-context';

export const DeleteProject = () => {
  const { handleDeleteProject, deleteLoading } = useModalsContext();

  return (
    <Box m={5}>
      <Center mt={4}>
        <Text fontWeight={'300'} fontSize={'16px'} mb={'16px'} textAlign='center'>
          Безвозвратно будут удалены все задачи, подзадачи, чаты, заметки и прикреплённые файлы.
        </Text>
        <Text fontWeight={'400'} fontSize={'16px'} mb={'36px'}>
          Продолжить?
        </Text>
        <Button
          isLoading={deleteLoading}
          leftIcon={<DeleteIcon color='primary.100' />}
          variant={'red'}
          onPress={() => handleDeleteProject()}
        >
          Удалить проект
        </Button>
      </Center>
    </Box>
  );
};
