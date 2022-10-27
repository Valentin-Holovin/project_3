import { Box, HStack, Image, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { EditIcon, PlusIcon, TagsIcon, UserEmptyIcon } from '../../../components';
import { AddProjectIcon } from '../../../components/icons/add-project-icon';
import { colors } from '../../../theme';
import { getPath } from '../../../utils';

type ITaskItem = {
  type: string;
  isEmpty: boolean;
  userImg?: string | undefined;
  handleEdit: () => void;
  children: React.ReactNode;
  isUpdate?: boolean;
};

export const TaskItemTypes = {
  PROJECT: 'PROJECT',
  TAGS: 'TAGS',
  USER: 'USER',
};

export const TaskItem = ({
  type,
  isEmpty,
  handleEdit,
  userImg,
  children,
  isUpdate = false,
}: ITaskItem) => {
  return (
    <HStack
      style={[
        styles.wrapper,
        {
          opacity: isUpdate ? 0.4 : 1,
        },
      ]}
    >
      <TaskItemIcon type={type} userImg={userImg} />
      {isEmpty ? <TaskItemEmptyTitle type={type} /> : children}
      <Box marginLeft={'auto'}>
        <TouchableOpacity onPress={handleEdit}>
          <HStack w={'20px'} h={'20px'} alignItems='center'>
            {isEmpty ? <PlusIcon color={'#000'} /> : <EditIcon fill={'#000'} />}
          </HStack>
        </TouchableOpacity>
      </Box>
    </HStack>
  );
};

const TaskItemIcon = ({ type, userImg }: { type: string; userImg: string | undefined }) => {
  return (
    <Box>
      {type === TaskItemTypes.PROJECT && <AddProjectIcon fill={colors.primary['600']} size={5} />}
      {type === TaskItemTypes.TAGS && <TagsIcon size={6} />}
      {type === TaskItemTypes.USER && userImg && (
        <Image
          resizeMode='contain'
          style={styles.userAvatar}
          source={{
            uri: getPath(userImg) as string,
          }}
          alt='user avatar'
        />
      )}
      {type === TaskItemTypes.USER && !userImg && <UserEmptyIcon mr={1} size={5} />}
    </Box>
  );
};
const TaskItemEmptyTitle = ({ type }: { type: string }) => {
  const getTitle = (type: string) => {
    switch (type) {
      case TaskItemTypes.USER:
        return 'Ответственный за задачу';
      case TaskItemTypes.TAGS:
        return 'Теги';
      default:
        return 'Выберите проект';
    }
  };

  const title = getTitle(type);

  return <Text ml={'8px'}>{title}</Text>;
};

const styles = StyleSheet.create({
  userAvatar: {
    borderRadius: 1000,
    height: 30,
    marginRight: 4,
    width: 30,
  },
  wrapper: {
    alignItems: 'center',
    borderColor: colors.primary['900'],
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 20,
    minHeight: 60,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
});
