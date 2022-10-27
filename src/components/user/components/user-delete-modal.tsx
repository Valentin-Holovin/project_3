import { Actionsheet, HStack as Row, Text } from 'native-base';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../../theme';
import { TrashIcon } from '../../icons';

type PropsTypes = {
  isOpen: boolean;
  onClose: () => void;
  onSubmitCallback: () => void;
};

export const UserDeleteModal = ({ isOpen, onClose, onSubmitCallback }: PropsTypes) => {
  const onSubmit = async () => {
    onSubmitCallback();
    onClose();
  };

  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={onClose}
      size='full'
      _backdrop={{
        backgroundColor: '#000',
      }}
    >
      <Actionsheet.Content
        _dragIndicator={{
          // custom style props!
          backgroundColor: colors.grey.light,
          borderRadius: '3px',
          height: '6px',
          marginTop: '10px',
          marginBottom: '10px',
          width: '100px',
        }}
      >
        <Text style={styles.title}>Удалить пользователя?</Text>

        <Text style={styles.description}>
          Безвозвратно будут удалены все задачи, подзадачи, чаты, заметки и прикреплённые файлы.
        </Text>

        <Text style={styles.subtitle}>Продолжить?</Text>

        <Row style={styles.delete_btn_wrapper}>
          <Pressable
            style={({ pressed }) => {
              return [styles.pressable, pressed && styles.pressable_pressed];
            }}
            onPress={onSubmit}
          >
            <TrashIcon size={5} marginRight={'8px'} />
            <Text style={styles.delete_btn_title}>Удалить пользователя</Text>
          </Pressable>
        </Row>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

const styles = StyleSheet.create({
  delete_btn_title: {
    color: colors.primary['100'],
    fontSize: fontSizes.md,
    fontWeight: '400',
    lineHeight: 16,
    marginTop: 3,
  },
  delete_btn_wrapper: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    width: '100%',
  },
  description: {
    color: colors.primary['700'],
    fontSize: fontSizes['lg'],
    fontWeight: '300',
    marginBottom: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  pressable: {
    alignItems: 'center',
    backgroundColor: colors.simpleColors.red,
    borderRadius: 2,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    width: 240,
  },
  pressable_pressed: {
    backgroundColor: colors.hover.redHover,
  },
  subtitle: {
    color: colors.primary['700'],
    fontSize: fontSizes['lg'],
    fontWeight: '400',
    lineHeight: 20,
  },
  title: {
    color: colors.primary['700'],
    fontSize: fontSizes['2xl'],
    fontWeight: '400',
    lineHeight: 25,
    marginBottom: 28,
  },
});
