import { Input, Pressable, Text } from 'native-base';
import React from 'react';
import { Keyboard, StyleSheet } from 'react-native';

type PropsTypes = {
  defaultText: string;
  name?: string;
  onExitCallback: (arg: string) => void;
};

export const NameField = ({ defaultText, name, onExitCallback }: PropsTypes) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const [inputFocused, setInputFocused] = React.useState(false);

  const inputValue = React.useRef<string>(name);

  React.useEffect(() => {
    if (name) {
      inputValue.current = name;
    }
  }, [name]);

  function onInputFocusHandler() {
    setIsEditing(true);
    setInputFocused(true);
  }

  function onChangeTextHandler(value: string) {
    inputValue.current = value;
  }

  React.useEffect(() => {
    const keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
      onExit();
    });
    return () => {
      keyboardListener.remove();
    };
  }, []);

  function onExit() {
    onExitCallback(inputValue?.current?.trim());
    setIsEditing(false);
  }

  return (
    <>
      {!isEditing ? (
        <Pressable
          style={styles.nameWrapper}
          borderColor={name ? 'grey.light' : 'primary.600'}
          onPress={onInputFocusHandler}
        >
          <Text variant={'title300'} isTruncated={true}>
            {inputValue.current || defaultText}
          </Text>
        </Pressable>
      ) : (
        <Input
          // StyleSheet.create style doesn`t work at this place
          w={'272px'}
          h={'30px'}
          py={0}
          fontWeight={300}
          borderWidth={'1px'}
          borderColor={name ? 'grey.light' : 'primary.600'}
          borderRadius={'0'}
          _focus={{
            h: '30px',
            py: '0px',
            borderColor: name ? 'grey.light' : 'primary.600',
          }}
          autoFocus={inputFocused}
          placeholder={defaultText}
          defaultValue={inputValue.current || ''}
          onChangeText={onChangeTextHandler}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  nameWrapper: {
    alignItems: 'center',
    borderRadius: 0,
    borderWidth: 1,
    display: 'flex',
    fontWeight: '300',
    height: 30,
    justifyContent: 'center',
    paddingVertical: 0,
    width: 272,
  },
});
