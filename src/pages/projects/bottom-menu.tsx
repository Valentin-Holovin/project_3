import { Actionsheet, Box, Text } from 'native-base';
import React from 'react';

import { useKeyboardBottomInset } from '../../hooks';
import { CreateProject } from './create-project';
import { DeleteProject } from './delete-project';
import { UpdateProject } from './update-project';

type Props = {
  title?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const BottomMenu = ({ title, children, isOpen, onClose }: Props) => {
  const bottomInset = useKeyboardBottomInset();

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content bottom={bottomInset}>
        <Box alignItems={'center'}>
          <Text fontSize={'20px'}>{title}</Text>
        </Box>
        {children}
      </Actionsheet.Content>
    </Actionsheet>
  );
};

BottomMenu.CreateProject = CreateProject;
BottomMenu.DeleteProject = DeleteProject;
BottomMenu.UpdateProject = UpdateProject;
