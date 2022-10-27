import { Center } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../../theme';
import { UserEmptyIcon } from '../../icons';

type Props = {
  size: number;
};

export const EmptyUserIcon = ({ size }: Props) => (
  <Center
    style={[
      styles.emptyUserContainer,
      {
        height: size + 1,
        width: size + 1,
      },
    ]}
  >
    <UserEmptyIcon style={styles.emptyUserImage} />
  </Center>
);

const styles = StyleSheet.create({
  emptyUserContainer: {
    backgroundColor: colors.primary[500],
    borderColor: colors.primary[600],
    borderRadius: 100,
    borderWidth: 1,
    marginRight: 10,
  },
  emptyUserImage: {
    height: 30,
    width: 30,
  },
});
