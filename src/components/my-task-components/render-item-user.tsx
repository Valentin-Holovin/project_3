import { useNavigation } from '@react-navigation/core';
import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ROUTES } from '../../constants';
import { colors, fontSizes } from '../../theme';
import { TasksListItemType } from '../../types/task';
import { dateParse } from '../../utils';
import { TagItem, TaskStatus, UsersAvatar } from '..';

type Props = {
  item: TasksListItemType;
};

export const RenderItemUser = ({ item }: Props) => {
  const navigation = useNavigation();

  const onPress = (id: number) => {
    navigation.navigate(item?.isSubtask ? ROUTES.subtusk : ROUTES.task, {
      id: id || 0,
    });
  };

  return (
    <HStack style={styles.taskWrapper}>
      <TaskStatus statusId={item?.status?.id} />
      <Box flex={'1'} ml='10px'>
        <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(Number(item?.id))}>
          <Text style={styles.taskTitle}>{item?.project}</Text>
          <Text>{item.name}</Text>
        </TouchableOpacity>

        {item?.maintainer?.login ? (
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <HStack mt={'6px'} alignItems='center'>
              <UsersAvatar src={item?.maintainer?.image} />
              <Text fontSize={fontSizes.sm} fontWeight='300'>
                {item?.maintainer?.login}
              </Text>
            </HStack>
            <Text style={styles.dataText}>{dateParse(Number(item?.createdAt)).date}</Text>
          </HStack>
        ) : (
          <Text style={styles.taskTitle}>Ответственных нет</Text>
        )}
        <HStack mt={'6px'} flexWrap='wrap'>
          {item?.tags.map((tag, index) => (
            <TagItem key={index} title={tag?.name} color={tag?.color} />
          ))}
        </HStack>
      </Box>
    </HStack>
  );
};

const styles = StyleSheet.create({
  dataText: {
    color: colors.grey.lightGray,
    fontSize: 12,
  },

  taskTitle: {
    fontSize: fontSizes.lg,
  },
  taskWrapper: {
    borderBottomColor: colors.primary['600'],
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
});
