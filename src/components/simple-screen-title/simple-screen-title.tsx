import { HStack, Text} from 'native-base';
import React from 'react';
import { StyleSheet} from 'react-native';

type Props = {
  title: string;
  count?: number;
};

export const SimpleScreenTitle = ({ title, count = 0 }: Props) => (
  <HStack style={styles.container}>
    <Text variant='title'>{title}</Text>
    {count !== 0 && (
      <Text fontSize={16} color='secondary.400'>
        {count}
      </Text>
    )}
  </HStack>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
