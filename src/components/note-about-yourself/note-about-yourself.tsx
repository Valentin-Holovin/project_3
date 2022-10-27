import { Box, Button, Flex, Input, Text } from 'native-base';
import React from 'react';
import { Keyboard, StyleSheet } from 'react-native';

import { colors } from '../../theme';
import { EditClickedIcon } from '../icons';

type PropsType = {
  note?: string;
  defaultText: string;
  onExitCallback: (arg: string) => void;
};

export const NoteAboutYourself = ({ note, defaultText, onExitCallback }: PropsType) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const [inputFocused, setInputFocused] = React.useState(false);

  const [noteValue, setNoteValue] = React.useState(note);

  React.useEffect(() => {
    if (note) {
      setNoteValue(note);
    }
  }, [note]);

  function onIconPressHandler() {
    setIsEditing(true);
    setInputFocused(true);
  }

  function onChangeTextHandler(value: string) {
    setNoteValue(value);
  }

  React.useEffect(() => {
    const keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
      onExit();
    });
    return () => {
      keyboardListener.remove();
    };
  }, [noteValue]);

  function onExit() {
    onExitCallback(noteValue?.trim());
    setIsEditing(false);
  }

  return (
    <Box h={'30px'} w={'full'}>
      {!isEditing ? (
        <Flex style={styles.flexWrapper}>
          <Flex style={styles.flexInner}>
            <Text isTruncated variant={'title300'} maxWidth={'280px'}>
              {noteValue?.trim() || defaultText}
            </Text>
            <Button variant={'unstyled'} style={styles.button} onPress={onIconPressHandler}>
              <EditClickedIcon size={'16px'} stroke={'secondary.400'} />
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Input
          // StyleSheet.create style doesn`t work at this place
          borderRadius={'0'}
          borderColor={'primary.500'}
          fontWeight={300}
          h={'30px'}
          py={0}
          backgroundColor={'primary.500'}
          _focus={{
            borderColor: 'primary.500',
            backgroundColor: 'primary.500',
            height: '30px',
            py: '0px',
          }}
          autoFocus={inputFocused}
          placeholder={defaultText}
          value={noteValue}
          onChangeText={onChangeTextHandler}
        />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    marginLeft: 10,
    width: 40,
  },
  flexInner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 320,
  },
  flexWrapper: {
    alignItems: 'center',
    backgroundColor: colors.primary['500'],
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 40,
    width: '100%',
  },
});
