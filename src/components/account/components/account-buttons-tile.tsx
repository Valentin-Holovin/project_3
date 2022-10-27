import { Button, Flex } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ArchiveIcon, InfoIcon, KeyIcon, TasksHistoryIcon } from '../../index';

export const AccountButtonsTile = () => {
  const ACCOUNT_BUTTONS_TILE_LIST = [
    {
      id: 1,
      icon: <ArchiveIcon size={'20px'} mb={'5px'} />,
      text: 'Архив',
      onPress: () => {},
    },
    {
      id: 2,
      icon: <InfoIcon size={'20px'} mb={'5px'} />,
      text: 'ЧаВо',
      onPress: () => {},
    },
    {
      id: 3,
      icon: <TasksHistoryIcon size={'20px'} mb={'5px'} />,
      text: 'История задач',
      onPress: () => {},
    },
    {
      id: 4,
      icon: <KeyIcon size={'20px'} mb={'5px'} />,
      text: 'Изменить пароль',
      onPress: () => {},
    },
  ];

  return (
    <Flex style={styles.wrapper}>
      {ACCOUNT_BUTTONS_TILE_LIST.map((item) => {
        return (
          <Button
            key={item.id}
            variant={'gray'}
            bgColor={'grey.lightest'}
            style={styles.button}
            onPress={item.onPress}
          >
            <Flex style={styles.button_inner}>
              {item.icon}
              {item.text}
            </Flex>
          </Button>
        );
      })}
    </Flex>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    height: 61,
    marginVertical: 5,
    width: 155,
  },
  button_inner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 5,
    width: 320,
  },
});
