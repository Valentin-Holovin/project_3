/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/no-nested-ternary */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Box, Flex, Text } from 'native-base';
import React from 'react';
import { Pressable, SafeAreaView, ViewStyle } from 'react-native';

import { DEVICE_WIDTH, SMALL_DEVICE_WIDTH } from '../../constants';
import { capitalize } from '../../utils';

export const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#0D0D0D',
      }}
    >
      <Flex
        bgColor={'primary.800'}
        height={'59px'}
        py={'6px'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const TabLabel = options.tabBarLabel || options.title || route.name;
          const TabIcon = options.tabBarIcon as React.ElementType;
          const TabStyle = options.tabBarStyle as ViewStyle;

          const isFocused = state.index === index;

          const currentColor = isFocused
            ? options.tabBarActiveTintColor
            : options.tabBarInactiveTintColor;

          const notificationsCount = options.tabBarBadge;

          const capitalizedTabLabel = capitalize(TabLabel);

          const handlePress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (options.tabBarIcon === undefined) return null;

          return (
            <Box style={TabStyle} key={index}>
              <Pressable key={index} onPress={handlePress}>
                <Flex
                  align='center'
                  justify='space-between'
                  flexDirection={'column'}
                  mt={1}
                  mx={'0.5px'}
                >
                  <Box mb={'5px'} position='relative'>
                    {notificationsCount && notificationsCount != 0 ? (
                      <Box
                        borderWidth='2px'
                        borderColor='primary.800'
                        position='absolute'
                        paddingX='3px'
                        bg={'simpleColors.red'}
                        left={4}
                        top={-1}
                        zIndex={2}
                        borderRadius={10}
                        fontWeight='bold'
                      >
                        <Text fontSize='xs' color='primary.100' lineHeight={'14px'}>
                          {notificationsCount}
                        </Text>
                      </Box>
                    ) : null}
                    <TabIcon size={'25px'} focused={isFocused} />
                  </Box>
                  {capitalizedTabLabel && (
                    <Flex
                      bgColor={isFocused ? 'secondary.400' : 'primary.800'}
                      justify={'center'}
                      align={'center'}
                      paddingX={'8px'}
                      paddingY={'3px'}
                      borderRadius={'10px'}
                    >
                      <Text
                        color={currentColor}
                        fontSize={DEVICE_WIDTH < SMALL_DEVICE_WIDTH ? 'xs' : 'sm'}
                        fontWeight={400}
                        lineHeight={'15px'}
                      >
                        {capitalizedTabLabel}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </Pressable>
            </Box>
          );
        })}
      </Flex>
    </SafeAreaView>
  );
};
