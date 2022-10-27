import { Box } from 'native-base';
import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AllProjectActions } from '../../constants';
import { useChat } from '../../hooks';
import { chatThemeType } from '../../types/chat';
import { pageEmpty } from '../../types/pager-view';
import { RequestHandler } from '../request-handler/request-handler';
import { ChatBottomInput } from './chat-bottom-input/chat-bottom-input';
import { ChatList } from './chat-list/chat-list';

type Props = {
  theme: chatThemeType;
  EmptypageData: pageEmpty;
  type: AllProjectActions;
};

export const ChatComponent = ({ theme, EmptypageData, type }: Props) => {
  const { loading, messagesCount } = useChat();

  const scrollRef = React.useRef<KeyboardAwareScrollView>(null);

  const flatlistRef = React.useRef<FlatList>(null);

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[
        styles.safeAreaViewStyle,
        {
          backgroundColor: theme.inputBackgroundColor,
        },
      ]}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewStyle}
        behavior={Platform.OS === 'ios' ? undefined : 'height'}
      >
        <RequestHandler loading={loading && messagesCount === 0}>
          <KeyboardAwareScrollView
            ref={scrollRef}
            contentContainerStyle={styles.keyBoardStyle}
            scrollEnabled={false}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps='handled'
          >
            <Box flexGrow={1}>
              <ChatList
                theme={theme}
                EmptypageData={EmptypageData}
                flatlistRef={flatlistRef}
                type={type}
              />

              <ChatBottomInput
                type={type}
                theme={theme}
                scrollRef={scrollRef}
                flatlistRef={flatlistRef}
              />
            </Box>
          </KeyboardAwareScrollView>
        </RequestHandler>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyBoardStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  keyboardAvoidingViewStyle: {
    flex: 1,
  },
  safeAreaViewStyle: {
    flex: 1,
  },
});
