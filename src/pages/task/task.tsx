/* eslint-disable prettier/prettier */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { Box, Button } from 'native-base';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import {
  ChatComponent,
  FilesComponent,
  Layout,
  NotesComponent,
  PagerViewHeaderList,
  PlusIcon,
  RequestHandler,
  ScreenHeader,
  SubtaskComponent,
} from '../../components';
import { AllProjectActions, chatTheme, items, ROUTES } from '../../constants';
import { FilesProvider } from '../../context/files-context/files-provider';
import { TaskChatProvider } from '../../context/task/task-chat-context/task-chat-provider';
import { TaskNotesProvider } from '../../context/task/task-notes-context/task-notes-povider';
import { TaskSubtaskProvider } from '../../context/task/task-subtask-context/task-subtask-provider';
import { useGetTaskQuery, useNavigationPanel } from '../../hooks';
import { colors as themeColors } from '../../theme';
import { MainStackParamList } from '../../types/navigations';
import { getStatusColor } from '../../utils';
import { BottomSheets } from './bottom-sheets/bottom-sheets';
import { ChatBottomSheets } from './bottom-sheets/chat-bottom-sheets';

type RouteType = RouteProp<MainStackParamList, ROUTES.task>;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const Task = () => {
  const route = useRoute<RouteType>();
  const navigation = useNavigation();

  const { ref, ...navigationPanel } = useNavigationPanel(0);

  const onPressHeaderItem = React.useCallback(
    (index: number) => navigationPanel.setPage(index),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleCreateSubtask = () => {
    navigation.navigate(ROUTES.createOrUpdateTask, {
      type: 'Subtask',
      taskId: route.params.id,
    });
  };

  const { data, loading } = useGetTaskQuery({
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
            type='Task'
            taskStatusColor={
              data?.getTask.status?.id ? getStatusColor(data?.getTask.status?.id) : ''
            }
            code={data?.getTask.code}
            taskName={data?.getTask.name}
            taskId={data?.getTask?.id}
            chatId={data?.getTask.chat.id}
          />
          <PagerViewHeaderList
            theme={chatTheme.grayTheme.header}
            data={items.task.headerItems}
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
                  <TaskSubtaskProvider id={route.params.id} chatId={data?.getTask.chat.id}>
                    <SubtaskComponent EmptypageData={items.task.pageEmpty[0]} />
                  </TaskSubtaskProvider>
                  <Button style={styles.button} onPress={() => handleCreateSubtask()}>
                    <PlusIcon size={4} />
                  </Button>
                </View>
              ),
              [data?.getTask.chat.id, route.params.id],
            )}
            {React.useMemo(
              () => (
                <View key={2} style={styles.PagerView} collapsable={false}>
                  <TaskChatProvider taskId={route.params.id}>
                    <ChatComponent
                      theme={chatTheme.grayTheme.chat}
                      EmptypageData={items.task.pageEmpty[1]}
                      type={AllProjectActions.task}
                    />

                    <ChatBottomSheets statusId={Number(data?.getTask?.status?.id)} />
                  </TaskChatProvider>
                </View>
              ),
              [route.params.id],
            )}
            {React.useMemo(
              () => (
                <View key={3} style={styles.PagerView} collapsable={false}>
                  <FilesProvider
                    type={AllProjectActions.task}
                    taskId={Number(route.params.id)}
                    chatId={data?.getTask.chat.id}
                  >
                    <FilesComponent
                      theme={chatTheme.grayTheme.files}
                      EmptypageData={items.task.pageEmpty[2]}
                    />
                  </FilesProvider>
                </View>
              ),
              [route.params.id, data?.getTask.chat.id],
            )}
            {React.useMemo(
              () => (
                <View key={4} style={styles.PagerView} collapsable={false}>
                  <TaskNotesProvider taskId={route.params?.id} chatId={data?.getTask.chat.id}>
                    <NotesComponent
                      theme={chatTheme.grayTheme.notes}
                      EmptypageData={items.task.pageEmpty[3]}
                    />
                  </TaskNotesProvider>
                </View>
              ),
              [route.params.id, data?.getTask.chat.id],
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
  button: {
    backgroundColor: themeColors.secondary['400'],
    borderRadius: 100,
    bottom: 30,
    height: 48,
    position: 'absolute',
    right: 10,
    width: 48,
  },
});
