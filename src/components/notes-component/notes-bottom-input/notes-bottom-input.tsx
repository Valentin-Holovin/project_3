import { Box, Spinner } from 'native-base';
import React from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useNotes } from '../../../hooks';
import { notesThemeType } from '../../../types/chat';
import { NoteSaveIcon } from '../../icons';
import { MultilineInput } from '../../multiline-input/multiline-input';

type Props = {
  theme: notesThemeType;
  scrollRef: React.RefObject<KeyboardAwareScrollView>;
  flatlistRef: React.MutableRefObject<FlatList | null>;
};

export const NotesBottomInput = React.memo(({ theme, scrollRef, flatlistRef }: Props) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const { sendNote, createNoteLoading } = useNotes();

  const onChangeText = (text: string) => {
    setInputValue(text);
    if (Platform.OS === 'ios') scrollRef.current?.scrollToEnd();
  };

  const onSentMessage = async () => {
    flatlistRef.current?.scrollToEnd({
      animated: true,
    });
    const data = await sendNote(inputValue);
    data && setInputValue('');
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
        placeholder={'Введите текст заметки'}
      />
      <Box position='absolute' top={3} right={6}>
        {createNoteLoading ? (
          <Spinner />
        ) : (
          <TouchableOpacity onPress={onSentMessage} disabled={inputValue === ''}>
            <NoteSaveIcon color={theme.iconColor} size={5} margin={1} />
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
