import { Box, Image } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../theme';
import { EmptyUserIcon } from './empty-user-icon/empty-user-icon';

type Props = {
  image?: string | null;
  size?: number;
  isOnline?: boolean;
};

export const UserImageWithStatus = ({ image, size = 30, isOnline }: Props) => (
  <Box style={styles.userImageContainer}>
    {image ? (
      <Image
        alt='user'
        resizeMode='cover'
        style={[
          styles.userAvatar,
          {
            height: size,
            width: size,
          },
        ]}
        source={{
          uri: image,
        }}
        fallbackElement={<EmptyUserIcon size={size} />}
      />
    ) : (
      <EmptyUserIcon size={size} />
    )}
    <Box
      style={[
        isOnline ? styles.userOnlineStatusIndicator : styles.userOflineStatusIndicator,
        {
          height: size / 3,
          width: size / 3,
          right: size / 3,
        },
      ]}
    />
  </Box>
);

const styles = StyleSheet.create({
  userAvatar: {
    borderRadius: 100,
    marginRight: 10,
  },
  userImageContainer: {
    position: 'relative',
  },
  userOflineStatusIndicator: {
    backgroundColor: colors.primary[600],
    borderColor: '#EFEFEF',
    borderRadius: 100,
    borderWidth: 2,
    bottom: 0,
    position: 'absolute',
  },
  userOnlineStatusIndicator: {
    backgroundColor: colors.secondary[400],
    borderColor: '#EFEFEF',
    borderRadius: 100,
    borderWidth: 2,
    bottom: 0,
    position: 'absolute',
  },
});
