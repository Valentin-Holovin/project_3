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
  ScreenHeader,
} from '../../components';
import { AllProjectActions, chatTheme, items, ROUTES } from '../../constants';
import { FilesProvider } from '../../context/files-context/files-provider';
import { PrivatChatProvider } from '../../context/privat-chat/privat-chat-context/privat-chat-provider';
import { PrivatNotesProvider } from '../../context/privat-chat/privat-notes-context/privat-notes-povider';
import { useNavigationPanel } from '../../hooks';
import { MainStackParamList } from '../../types/navigations';

type RouteType = RouteProp<MainStackParamList, ROUTES.chat>;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const Chat = () => {
  const route = useRoute<RouteType>();

  const [chatId, setChatId] = React.useState(
    (route.params.item?.chats && route.params.item?.chats[0]?.id) || 0,
  );

  const { ref, ...navigationPanel } = useNavigationPanel(1);

  const onPressHeaderItem = React.useCallback(
    (index: number) => navigationPanel.setPage(index),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  React.useEffect(() => {
    setChatId((route.params.item?.chats && route.params.item?.chats[0]?.id) || 0);
  }, [route.params.item]);

  return (
    <Layout isKeyboardAvoiding={false}>
      <Box flex={1}>
        <ScreenHeader
          type='Chat'
          id={(route.params.item?.chats && route.params.item?.chats[0]?.id) || route.params.item.id}
          isOnline={route.params.item.onlineStatus}
          image={route.params.item.image}
          name={route.params.item.login}
        />
        <PagerViewHeaderList
          theme={chatTheme.greenTheme.header}
          data={items.chat.headerItems}
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
                <PrivatChatProvider
                  chatId={chatId}
                  userId={route.params.item.id}
                  setChatId={setChatId}
                >
                  <ChatComponent
                    theme={chatTheme.greenTheme.chat}
                    EmptypageData={items.chat.pageEmpty[0]}
                    type={AllProjectActions.chat}
                  />
                </PrivatChatProvider>
              </View>
            ),
            [chatId, route.params.item.id, setChatId],
          )}
          {React.useMemo(
            () => (
              <View key={2} style={styles.PagerView} collapsable={false}>
                <FilesProvider type={AllProjectActions.chat} chatId={chatId}>
                  <FilesComponent
                    theme={chatTheme.greenTheme.files}
                    EmptypageData={items.chat.pageEmpty[1]}
                  />
                </FilesProvider>
              </View>
            ),
            [chatId],
          )}
          {React.useMemo(
            () => (
              <View key={3} style={styles.PagerView} collapsable={false}>
                <PrivatNotesProvider userId={route.params.item.id} chatId={chatId}>
                  <NotesComponent
                    theme={chatTheme.greenTheme.notes}
                    EmptypageData={items.chat.pageEmpty[2]}
                  />
                </PrivatNotesProvider>
              </View>
            ),
            [chatId, route.params.item.id],
          )}
        </AnimatedPagerView>
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  PagerView: {
    flex: 1,
  },
});
