import { Button, HStack, Menu, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../../theme';
import { Menu as MenuTypes } from '../../../types/menu';
import { PlusIcon } from '../../index';

export const AddBtn = ({ title, options }: MenuTypes) => {
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const openIsEditOpen = () => setIsEditOpen(true);
  const closeIsEditOpen = () => setIsEditOpen(false);

  return (
    <Menu
      shadow={2}
      w='260'
      style={{
        marginRight: 10,
        paddingLeft: 10,
      }}
      isOpen={isEditOpen}
      onOpen={openIsEditOpen}
      placement={'top left'}
      onClose={closeIsEditOpen}
      trigger={(triggerProps) => {
        return (
          <Button style={styles.button} {...triggerProps}>
            <PlusIcon size={4} />
          </Button>
        );
      }}
    >
      {title && (
        <Text
          style={{
            fontSize: 20,
            lineHeight: 25,
            textAlign: 'center',
            marginVertical: 5,
          }}
        >
          {title || ''}
        </Text>
      )}

      {options
        ?.filter((item) => item?.isVisible)
        .map(({ handlePress, Icon, title }, index) => (
          <Menu.Item pb={3} pt={3} key={index} onPress={handlePress}>
            <HStack alignItems='center'>
              <Icon size={6} mr='10px' />
              <Text>{title}</Text>
            </HStack>
          </Menu.Item>
        ))}
    </Menu>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary['400'],
    borderRadius: 100,
    bottom: 30,
    height: 48,
    position: 'absolute',
    right: 10,
    width: 48,
  },
});
