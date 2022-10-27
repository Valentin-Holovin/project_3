import { Box } from 'native-base';
import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNotes } from '../../hooks';
import { notesThemeType } from '../../types/chat';
import { pageEmpty } from '../../types/pager-view';
import { RequestHandler } from '../request-handler/request-handler';
import { NotesBottomInput } from './notes-bottom-input/notes-bottom-input';
import { NotesList } from './notes-list/notes-list';

type Props = {
  theme: notesThemeType;
  EmptypageData: pageEmpty;
};

export const NotesComponent = ({ theme, EmptypageData }: Props) => {
  const { loading, refreshing } = useNotes();

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
        <RequestHandler loading={loading && !refreshing}>
          <KeyboardAwareScrollView
            ref={scrollRef}
            contentContainerStyle={styles.keyBoadStyle}
            scrollEnabled={false}
            nestedScrollEnabled={true}
          >
            <Box flexGrow={1}>
              <NotesList theme={theme} EmptypageData={EmptypageData} flatlistRef={flatlistRef} />

              <NotesBottomInput theme={theme} scrollRef={scrollRef} flatlistRef={flatlistRef} />
            </Box>
          </KeyboardAwareScrollView>
        </RequestHandler>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyBoadStyle: {
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
