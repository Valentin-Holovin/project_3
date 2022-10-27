import React from 'react';
import { Keyboard } from 'react-native';

type Props = {
  onKeyboardShow: () => void;
  onKeyboardHide: () => void;
};

export const useOnKeyboardChange = ({ onKeyboardShow, onKeyboardHide }: Props) => {
  React.useEffect(() => {
    const didShowListener = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    const willShowListener = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
    const didHideListener = Keyboard.addListener('keyboardDidHide', onKeyboardHide);
    const willHideListener = Keyboard.addListener('keyboardWillHide', onKeyboardHide);
    return () => {
      didShowListener.remove();
      willShowListener.remove();
      didHideListener.remove();
      willHideListener.remove();
    };
  }, [onKeyboardShow, onKeyboardHide]);
};
