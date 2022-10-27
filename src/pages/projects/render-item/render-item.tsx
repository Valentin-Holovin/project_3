import { useNavigation } from '@react-navigation/core';
import { Box, HStack, Menu, Text } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import {
  BurgerMenuIcon,
  DeleteTaskIcon,
  EditTaskIcon,
  TagItem,
  TaskStatus,
  UsersAvatar,
} from '../../../components';
import { ROUTES } from '../../../constants';
import { modalsProps, useModalsContext } from '../../../context/modal-context/modal-context';
import { Modals } from '../../../context/modal-context/modal-provider';
import { Project } from '../../../graphql/generated';
import { colors, fontSizes } from '../../../theme';
import { MenuOption } from '../../../types/menu';

export const RenderItem = ({ item, isAdmin }: { item: Project; isAdmin: boolean }) => {
  const { handleChangeModal, setModalsProps } = useModalsContext();
  const navigation = useNavigation();

  const [isActive, setIsActive] = useState<boolean>(false);

  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const openIsEditOpen = () => setIsEditOpen(true);
  const closeIsEditOpen = () => setIsEditOpen(false);

  const onPress = (id: number) => {
    navigation.navigate(ROUTES.task, {
      id: id || 0,
    });
  };

  const tasks = item?.tasks.rows;

  const menuOptions: MenuOption[] = [
    {
      title: 'Редактировать',
      handlePress: () => {
        handleChangeModal(Modals.UPDATE_PROJECT);
        setModalsProps((prevState: modalsProps) => ({
          ...prevState,
          currentProject: item,
        }));
      },
      Icon: EditTaskIcon,
    },
    {
      title: 'Удалить проект?',
      handlePress: () => {
        handleChangeModal(Modals.DELETE_PROJECT);
        setModalsProps((prevState: modalsProps) => ({
          ...prevState,
          currentProject: item,
        }));
      },
      Icon: DeleteTaskIcon,
    },
  ];

  return (
    <Box marginY={'5px'}>
      <HStack style={styles.itemHeader}>
        <Text
          style={styles.itemHeaderTitle}
          onPress={() => setIsActive(!isActive)}
        >{`${item?.name} #${item?.number}`}</Text>

        {isAdmin && (
          <Menu
            shadow={2}
            w='260'
            mr='10px'
            pl={'10px'}
            isOpen={isEditOpen}
            onOpen={openIsEditOpen}
            onClose={closeIsEditOpen}
            trigger={(triggerProps) => {
              return (
                <TouchableOpacity activeOpacity={0.7} {...triggerProps}>
                  <BurgerMenuIcon size={6} />
                </TouchableOpacity>
              );
            }}
          >
            {menuOptions?.map(({ handlePress, Icon, title }, index) => (
              <Menu.Item pb={3} pt={3} key={index} onPress={handlePress}>
                <HStack alignItems='center'>
                  <Icon size={6} mr='10px' />
                  <Text>{title}</Text>
                </HStack>
              </Menu.Item>
            ))}
          </Menu>
        )}
      </HStack>

      {isActive && (
        <Box
          style={{
            backgroundColor: colors.primary['500'],
          }}
        >
          {tasks.length > 0 ? (
            tasks.map((task, index) => {
              return (
                <HStack
                  style={[
                    styles.taskWrapper,
                    {
                      borderBottomColor:
                        index === tasks.length - 1 ? colors.primary['100'] : colors.primary['600'],
                    },
                  ]}
                  key={index}
                >
                  <TaskStatus statusId={task?.status?.id} />
                  <Box flex={'1'} ml='10px'>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(Number(task?.id))}>
                      <Text
                        style={styles.taskTitle}
                      >{`${task?.name} #${task?.project?.number}.${task?.number}`}</Text>
                    </TouchableOpacity>
                    {task?.maintainer?.login ? (
                      <HStack mt={'6px'} alignItems='center'>
                        <UsersAvatar src={task?.maintainer?.image} />
                        <Text fontSize={fontSizes.sm} fontWeight='300'>
                          {task?.maintainer?.login}
                        </Text>
                      </HStack>
                    ) : (
                      <Text style={styles.taskTitle}>Ответственных нет</Text>
                    )}
                    <HStack mt={'6px'} flexWrap='wrap'>
                      {task?.tags?.rows?.map((tag, index) => (
                        <TagItem key={index} title={tag.name} color={tag.color} />
                      ))}
                    </HStack>
                  </Box>
                </HStack>
              );
            })
          ) : (
            <Text
              style={[
                styles.taskTitle,
                {
                  margin: 20,
                },
              ]}
            >
              Задач ещё нет
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  itemHeader: {
    backgroundColor: colors.primary['700'],
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 8,
  },
  itemHeaderTitle: {
    color: colors.primary['100'],
    flex: 1,
    fontSize: fontSizes.lg,
    fontWeight: '400',
    lineHeight: 24,
    marginRight: 20,
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
