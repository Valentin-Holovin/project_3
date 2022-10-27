import React from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

import { IS_IOS } from '../constants';

export const useKeyboardBottomInset = () => {
  const [bottomInset, setBottomInset] = React.useState(0);

  function onKeyboardDidShow(e: KeyboardEvent) {
    setBottomInset(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setBottomInset(0);
  }

  React.useEffect(() => {
    if (IS_IOS) {
      const showSubscription = Keyboard.addListener('keyboardWillShow', onKeyboardDidShow);
      const hideSubscription = Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }
  }, []);

  return bottomInset;
};
