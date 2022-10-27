/* eslint-disable prettier/prettier */
import { RouteProp, useRoute } from '@react-navigation/core';
import { Box } from 'native-base';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import {
  ChatComponent,
  FilesComponent,
  Layout,
  NotesComponent,
  PagerViewHeaderList,
  RequestHandler,
  ScreenHeader,
} from '../../components';
import { AllProjectActions, chatTheme, items, ROUTES } from '../../constants';
import { FilesProvider } from '../../context/files-context/files-provider';
import { SubtuskChatProvider } from '../../context/subtusk/subtask-chat-context/subtask-chat-provider';
import { SubtaskNotesProvider } from '../../context/subtusk/subtask-notes-context/subtask-notes-povider';
import { useGetSubtaskQuery, useNavigationPanel } from '../../hooks';
import { MainStackParamList } from '../../types/navigations';
import { getStatusColor } from '../../utils';
import { BottomSheets } from './bottom-sheets/bottom-sheets';
import { ChatBottomSheets } from './bottom-sheets/chat-bottom-sheets';

type RouteType = RouteProp<MainStackParamList, ROUTES.subtusk>;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const Subtask = () => {
  const route = useRoute<RouteType>();

  const { ref, ...navigationPanel } = useNavigationPanel(0);

  const onPressHeaderItem = React.useCallback(
    (index: number) => navigationPanel.setPage(index),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const { data, loading } = useGetSubtaskQuery({
    variables: {
      id: route.params.id,
      type: 'simple',
    },
  });

  return (
    <Layout isKeyboardAvoiding={false}>
      <RequestHandler loading={loading}>
        <Box flex={1}>
          <ScreenHeader
            type='Subtask'
            taskStatusColor={
              data?.getSubtask?.status?.id ? getStatusColor(data?.getSubtask?.status?.id) : ''
            }
            code={data?.getSubtask.code}
            taskName={data?.getSubtask?.name}
            bg='#F2F7FF'
            subtaskId={data?.getSubtask?.id}
            taskId={data?.getSubtask?.task?.id}
            chatId={data?.getSubtask?.chat?.id}
          />
          <PagerViewHeaderList
            theme={chatTheme.darkBlue.header}
            data={items.subtusk.headerItems}
            onPressHeaderItem={onPressHeaderItem}
            onPageScrollOffset={navigationPanel.onPageScrollOffset}
            onPageScrollPosition={navigationPanel.onPageScrollPosition}
            activePage={navigationPanel.activePage}
          />
          <AnimatedPagerView
            ref={ref}
            style={styles.PagerView}
            initialPage={0}
            layoutDirection='ltr'
            scrollEnabled={false}
            onPageScroll={navigationPanel.onPageScroll}
            onPageSelected={navigationPanel.onPageSelected}
            pageMargin={10}
            // Lib does not support dynamically orientation change
            orientation='horizontal'
            // Lib does not support dynamically transitionStyle change
            transitionStyle='scroll'
            showPageIndicator={navigationPanel.dotsEnabled}
          >
            {React.useMemo(
              () => (
                <View key={1} style={styles.PagerView} collapsable={false}>
                  <SubtuskChatProvider subtuskId={route.params.id}>
                    <ChatComponent
                      type={AllProjectActions.subtask}
                      theme={chatTheme.darkBlue.chat}
                      EmptypageData={items.subtusk.pageEmpty[0]}
                    />

                    <ChatBottomSheets statusId={Number(data?.getSubtask?.status?.id)} />
                  </SubtuskChatProvider>
                </View>
              ),
              [route.params.id],
            )}
            {React.useMemo(
              () => (
                <View key={2} style={styles.PagerView} collapsable={false}>
                  <FilesProvider
                    type={AllProjectActions.subtask}
                    subtaskId={route.params.id}
                    chatId={data?.getSubtask?.chat?.id}
                  >
                    <FilesComponent
                      theme={chatTheme.darkBlue.files}
                      EmptypageData={items.subtusk.pageEmpty[1]}
                    />
                  </FilesProvider>
                </View>
              ),
              [route.params.id, data?.getSubtask?.chat?.id],
            )}
            {React.useMemo(
              () => (
                <View key={3} style={styles.PagerView} collapsable={false}>
                  <SubtaskNotesProvider
                    subtaskId={route.params?.id}
                    chatId={data?.getSubtask?.chat?.id}
                  >
                    <NotesComponent
                      theme={chatTheme.darkBlue.notes}
                      EmptypageData={items.subtusk.pageEmpty[2]}
                    />
                  </SubtaskNotesProvider>
                </View>
              ),
              [route.params.id, data?.getSubtask?.chat?.id],
            )}
          </AnimatedPagerView>
          <BottomSheets />
        </Box>
      </RequestHandler>
    </Layout>
  );
};

const styles = StyleSheet.create({
  PagerView: {
    flex: 1,
  },
});
