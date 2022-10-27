import { HStack as Row, Text } from 'native-base';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../../theme';
import { TrashIcon } from '../../icons';

type PropsType = {
  isBtnDisabled: boolean;
  onOpenDeleteModal: () => void;
};

export const UserDeleteBtn = ({ onOpenDeleteModal, isBtnDisabled }: PropsType) => {
  return (
    <Row style={styles.delete_btn_wrapper}>
      <Pressable
        style={[styles.wrapper, isBtnDisabled && styles.wrapper_tap]}
        onPress={onOpenDeleteModal}
        disabled={isBtnDisabled}
      >
        <TrashIcon size={5} marginRight={'8px'} />
        <Text style={styles.title}>Удалить пользователя</Text>
      </Pressable>
    </Row>
  );
};

const styles = StyleSheet.create({
  delete_btn_wrapper: {
    justifyContent: 'center',
    marginTop: 60,
    width: '100%',
  },
  title: {
    color: colors.primary['100'],
    fontSize: fontSizes.md,
    fontWeight: '400',
    lineHeight: 16,
    marginTop: 3,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: colors.simpleColors.red,
    borderRadius: 2,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    width: 240,
  },
  wrapper_tap: {
    backgroundColor: colors.hover.redHover,
  },
});
