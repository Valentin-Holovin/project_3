import React, { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

type Props = {
  children: ReactNode;
};

export const HideKeyboardOutsideClick = ({ children }: Props) => {
  return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>;
};
