import { Box, Image } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { getPath } from '../../../utils';
import { UserEmptyIcon } from '../../index';

type UserAvatarPropsTypes = {
  src?: string | null;
};

export const UsersAvatar = ({ src }: UserAvatarPropsTypes) => {
  return (
    <Box style={styles.image_wrapper}>
      {src ? (
        <Image
          style={styles.image}
          source={{
            uri: getPath(src) || '',
          }}
          alt='user avatar'
          fallbackElement={<UserEmptyIcon size={8} />}
        />
      ) : (
        <UserEmptyIcon size={8} />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
  image_wrapper: {
    borderRadius: 100,
    marginRight: 10,
    overflow: 'hidden',
  },
});
