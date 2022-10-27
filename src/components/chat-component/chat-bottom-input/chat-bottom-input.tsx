import { Box, Spinner } from 'native-base';
import React from 'react';
import { FlatList, Keyboard, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AllProjectActions } from '../../../constants';
import { useAlertMessage, useChat, useLoadFileToServer } from '../../../hooks';
import { chatThemeType } from '../../../types/chat';
import { ClipIcon, SendIcon } from '../../icons';
import { MultilineInput } from '../../multiline-input/multiline-input';

type Props = {
  theme: chatThemeType;
  scrollRef: React.RefObject<KeyboardAwareScrollView>;
  flatlistRef: React.MutableRefObject<FlatList | null>;
  type: AllProjectActions;
};

export const ChatBottomInput = React.memo(({ theme, type, scrollRef, flatlistRef }: Props) => {
  const [inputValue, setInputValue] = React.useState('');

  const { sendMessage, sendMessageLoading, id, messagesCount } = useChat();

  const { handleLoadFileToServer, isFileLoading } = useLoadFileToServer({
    type,
    [`${type}`]: id,
  });

  const { alertMessage } = useAlertMessage();

  const onChangeText = (text: string) => {
    setInputValue(text);
    if (Platform.OS === 'ios') scrollRef.current?.scrollToEnd();
  };

  const onSentMessage = async () => {
    messagesCount > 0 &&
      flatlistRef.current?.scrollToIndex({
        index: 0,
        animated: true,
      });
    const data = await sendMessage(inputValue);
    Keyboard.dismiss();
    data && setInputValue('');
  };

  const onPickFile = async () => {
    try {
      const data = await handleLoadFileToServer();
      if (data) {
        alertMessage({
          title: 'Файл успешно загружен',
        });
        await sendMessage(`Добавлен файл ${data?.fileName}`);
      }
    } catch {
      alertMessage({
        title: 'Произошла ошибка при загрузке файла',
      });
    }
  };

  const onContentSizeChange = () => {
    if (scrollRef && scrollRef.current && Platform.OS === 'ios') {
      scrollRef.current?.scrollToEnd();
    }
  };

  return (
    <Box
      style={styles.container}
      bg={theme.inputBackgroundColor}
      borderColor={theme.inputBorderColor}
    >
      <MultilineInput
        value={inputValue}
        onChangeText={onChangeText}
        onContentSizeChange={onContentSizeChange}
        placeholder={'Написать сообщение'}
      />
      <Box position='absolute' top={4} right={6}>
        {sendMessageLoading || isFileLoading ? (
          <Spinner />
        ) : // eslint-disable-next-line unicorn/no-nested-ternary
        inputValue === '' ? (
          <TouchableOpacity onPress={onPickFile}>
            <ClipIcon size={5} color={'primary.700'} marginLeft={3} marginBottom={1} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onSentMessage}>
            <SendIcon size={5} color={theme.iconColor} />
          </TouchableOpacity>
        )}
      </Box>
    </Box>
  );
});

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: 'relative',
  },
});
