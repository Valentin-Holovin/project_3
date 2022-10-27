import { Actionsheet, Box, Text } from 'native-base';
import React from 'react';

import { DeleteSubtask } from './delete-subtask';
import { StatusesSubtask } from './statuses';

type Props = {
  title?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const BottomMenu = ({ title, children, isOpen, onClose }: Props) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Box alignItems={'center'}>
          <Text fontSize={'20px'} mb='18px'>
            {title}
          </Text>
        </Box>
        {children}
      </Actionsheet.Content>
    </Actionsheet>
  );
};

BottomMenu.DeleteSubtask = DeleteSubtask;
BottomMenu.StatusesSubtask = StatusesSubtask;
