import { useNavigation } from '@react-navigation/core';
import { Box, HStack } from 'native-base';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ArrowBackIcon } from '../icons';
import { ChatHeader, IChatHeader } from './chat-header/chat-header';
import { ISubtaskHeader, SubtaskHeader } from './subtask-header/subtask-header';
import { ITaskHeader, TaskHeader } from './task-header/task-header';
import { ITitleHeader, TitleHeader } from './title-header/title-header';
import { IUsersHeader, UsersHeader } from './users-header/users-header';

type HeaderTypes = { bg?: string } & (
  | IUsersHeader
  | IChatHeader
  | ITitleHeader
  | ITaskHeader
  | ISubtaskHeader
);

export const ScreenHeader = (props: HeaderTypes) => {
  const Children: React.VFC<HeaderTypes> = (props) => {
    switch (props.type) {
      case 'Users': {
        return <UsersHeader />;
      }
      case 'Chat': {
        return <ChatHeader {...props} />;
      }
      case 'Title': {
        return <TitleHeader {...props} />;
      }
      case 'Task': {
        return <TaskHeader {...props} />;
      }
      case 'Subtask': {
        return <SubtaskHeader {...props} />;
      }

      default:
        return null;
    }
  };

  const navigation = useNavigation();

  const onPressBackArrow = () => navigation.goBack();

  return (
    <HStack alignItems='center' bg={props.bg || 'primary.500'} height={'60px'}>
      <Box ml={'1px'}>
        <Pressable onPress={onPressBackArrow} style={styles.back_btn}>
          <ArrowBackIcon size={4} marginX={2} marginY={2} />
        </Pressable>
      </Box>
      {Children(props)}
    </HStack>
  );
};

const styles = StyleSheet.create({
  back_btn: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
});
