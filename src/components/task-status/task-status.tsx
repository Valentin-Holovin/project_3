import { Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { getStatusColor } from '../../utils';

export const TaskStatus = ({ statusId }: { statusId: number | undefined }) => {
  const color = getStatusColor(statusId);

  return (
    <Box
      style={[
        styles.status,
        {
          backgroundColor: color,
        },
      ]}
    ></Box>
  );
};

const styles = StyleSheet.create({
  status: {
    borderRadius: 3,
    height: '100%',
    width: 6,
  },
});
