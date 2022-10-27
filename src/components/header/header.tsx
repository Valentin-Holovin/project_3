import { Flex } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import * as colors from '../../theme/foundations/colors.theme';
import { DigitalClock } from '../digital-clock/digital-clock';
import { LogoIcon } from '../icons';

export const Header = () => {
  return (
    <Flex style={style.flex}>
      <LogoIcon size={20} />
      <DigitalClock />
    </Flex>
  );
};

const style = StyleSheet.create({
  flex: {
    alignItems: 'center',
    backgroundColor: colors.colors.primary['900'],
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
