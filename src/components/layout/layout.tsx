import { StatusBar } from 'expo-status-bar';
import { Box, IBoxProps, KeyboardAvoidingView } from 'native-base';
import React, { LegacyRef } from 'react';
import { Platform, ScrollView } from 'react-native';

import { SCREEN_BACKGROUND } from '../../constants';
import { colors } from '../../theme';
import { Menu } from '../../types/menu';
import { Header } from '../header/header';
import { SafeAreaWrapper } from '../safe-area-wrapper/safe-area-wrapper';
import { AddBtn } from '../users/components';

type Props = {
  isScrollable?: boolean;
  isKeyboardAvoiding?: boolean;
  isStatusBarVisible?: boolean;
  isHeaderVisible?: boolean;
  isTransparent?: boolean;
  wrapperOptions?: IBoxProps;
  children: React.ReactNode;
  refScroll?: LegacyRef<ScrollView>;
  withPadding?: boolean;
  statusBarBackgroundColor?: string;
  screenBackgroundColor?: string;
  handleAddProps?: Menu | undefined;
};

export const Layout = ({
  wrapperOptions,
  children,
  isKeyboardAvoiding,
  isStatusBarVisible = false,
  isHeaderVisible = true,
  isScrollable = false,
  isTransparent = false,
  refScroll,
  statusBarBackgroundColor = colors.primary[900],
  screenBackgroundColor = '#fff',
  handleAddProps,
}: Props) => {
  const content = (
    <Box flexGrow={1} {...wrapperOptions} bg={screenBackgroundColor}>
      {children}
    </Box>
  );

  return (
    <Box flex={1} backgroundColor={isTransparent ? 'transparent' : SCREEN_BACKGROUND}>
      <SafeAreaWrapper statusBarBackgroundColor={statusBarBackgroundColor}>
        <StatusBar hidden={!isStatusBarVisible} />
        <KeyboardAvoidingView
          enabled={isKeyboardAvoiding}
          flex={1}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {isHeaderVisible ? <Header /> : null}

          {isScrollable ? (
            <ScrollView
              ref={refScroll}
              collapsable={false}
              nestedScrollEnabled={false}
              contentContainerStyle={{
                flexGrow: 1,
              }}
            >
              {content}
            </ScrollView>
          ) : (
            <Box flexGrow={1}>{content}</Box>
          )}
        </KeyboardAvoidingView>
        {handleAddProps ? (
          <AddBtn title={handleAddProps.title} options={handleAddProps.options} />
        ) : null}
      </SafeAreaWrapper>
    </Box>
  );
};
