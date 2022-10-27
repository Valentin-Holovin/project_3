import { BlurView } from 'expo-blur';
import { Box, Flex, Image, Pressable } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '../../theme';
import { DefaultAvatarIcon, EditIcon } from '../icons';

type PropsTypes = {
  image?: string | null;
  changeImage: () => void;
  width?: number;
  height?: number;
};

export const Avatar = ({ image, changeImage, width = 100, height = 100 }: PropsTypes) => {
  return (
    <Box width={width} height={height}>
      <Box
        style={[
          styles.inner_wrapper,
          {
            width,
            height,
          },
        ]}
      >
        {image ? (
          <Image
            style={[
              styles.main_image,
              {
                width,
                height,
              },
            ]}
            source={{
              uri: image,
            }}
            alt='avatar'
            fallbackElement={<DefaultAvatarIcon size={'80px'} zIndex={1} />}
          />
        ) : (
          <DefaultAvatarIcon size={`${width}px`} zIndex={1} />
        )}
        <Box
          style={[
            styles.blur_box_wrapper,
            {
              width,
            },
          ]}
        >
          <BlurView intensity={5}>
            <Flex style={styles.blur_flex}>
              <Pressable onPress={changeImage}>
                <Box style={styles.blur_box_inner}>
                  <EditIcon size={'16px'} fill={'#ffffff'} />
                </Box>
              </Pressable>
            </Flex>
          </BlurView>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  blur_box_inner: {
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    padding: 1,
    paddingBottom: 10,
    paddingHorizontal: 30,
  },
  blur_box_wrapper: {
    backgroundColor: colors.opacity.black,
    bottom: 0,
    height: 25,
    position: 'absolute',
    zIndex: 2,
  },
  blur_flex: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 1,
  },
  inner_wrapper: {
    borderRadius: 100,
    overflow: 'hidden',
  },
  main_image: {
    resizeMode: 'center',
  },
});
