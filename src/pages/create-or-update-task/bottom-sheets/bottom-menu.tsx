import { Actionsheet, Box, Text } from 'native-base';
import React from 'react';

import { MainUser } from './main-users';
import { Projects } from './projects';
import { SetUsers } from './set-users';
import { Tags } from './tags';
import { Users } from './users';

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

BottomMenu.Tags = Tags;
BottomMenu.Projects = Projects;
BottomMenu.MainUser = MainUser;
BottomMenu.Users = Users;
BottomMenu.SetUsers = SetUsers;
