import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors, fontSizes } from '../../theme';

type TagItemPropsType = {
  title: string;
  color?: string | null;
};

export const TagItem = ({ title, color }: TagItemPropsType) => {
  return (
    <HStack
      style={[
        styles.wrapper,
        {
          backgroundColor: `${color}`,
        },
      ]}
    >
      <Box style={styles.circle} />
      <Text style={styles.title}>{title}</Text>
    </HStack>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.primary['100'],
    borderRadius: 100,
    height: 6,
    marginRight: 5,
    width: 6,
  },
  title: {
    color: colors.primary['100'],
    fontSize: fontSizes.sm,
  },
  wrapper: {
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 6,
    marginRight: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
