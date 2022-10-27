import { Flex } from 'native-base';
import React from 'react';
import { Animated, Easing, TextInput } from 'react-native';

import { getCurrentTime } from '../../utils';

export const DigitalClock = () => {
  const animationValue = React.useRef(new Animated.Value(0)).current;
  const [initialTime, setInitialTime] = React.useState(getCurrentTime());

  React.useEffect(() => {
    animationValue.addListener(() => {
      setInitialTime(getCurrentTime());
    });
    return () => {
      animationValue.removeAllListeners();
    };
  });

  React.useEffect(() => {
    Animated.timing(animationValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 60000,
      easing: Easing.linear,
    }).start();
  }, [initialTime]);

  return (
    <Flex align={'center'} justify={'center'}>
      <TextInput
        editable={false}
        defaultValue={initialTime}
        style={{
          color: '#fff',
        }}
      />
    </Flex>
  );
};
