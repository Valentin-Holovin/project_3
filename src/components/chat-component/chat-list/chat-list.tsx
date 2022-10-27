import { Box, Spinner } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { AllProjectActions } from '../../../constants';
import { Message, UserRole } from '../../../graphql/generated';
import { useAuth, useChat } from '../../../hooks';
import { chatThemeType } from '../../../types/chat';
import { pageEmpty } from '../../../types/pager-view';
import { getPath } from '../../../utils';
import { EmptyListComponent } from '../../empty-list-component/empty-list-component';
import { ChatMessage } from '../chat-message/chat-message';

type Props = {
  EmptypageData: pageEmpty;
  theme: chatThemeType;
  flatlistRef: React.MutableRefObject<FlatList | null>;
  type: AllProjectActions;
};

export const ChatList = React.memo(({ EmptypageData, theme, flatlistRef, type }: Props) => {
  const { currentUserData } = useAuth();

  const {
    messages,
    handleLoadMore,
    setStopHandleLoadMore,
    handleLoadMoreLoading,
    deleteMessage,
    withAvatar,
  } = useChat();

  const renderItem = React.useCallback(
    ({ item }: { item: Message }) => (
      <ChatMessage
        text={item?.text}
        date={item?.createdAt}
        theme={theme.chatMessage}
        id={item?.id}
        isMymessage={currentUserData?.id === item?.user?.id}
        isAdmin={currentUserData?.role === UserRole.Admin}
        deleteMessage={deleteMessage}
        isRead={item?.isRead || false}
        withAvatarUser={withAvatar}
        avatar={getPath(item?.user?.image) || ''}
        name={item?.user?.login || ''}
        isOnline={item?.user?.onlineStatus || false}
        type={type}
      />
    ),
    [currentUserData?.id, currentUserData?.role, withAvatar],
  );

  const keyExtractor = (item: Message, index: number) => (item.id || index).toString();

  const onMomentumScrollBegin = () => setStopHandleLoadMore(false);

  return (
    <Box flex={1}>
      <FlatList
        ref={flatlistRef}
        contentContainerStyle={styles.contentContainerStyle}
        data={messages}
        inverted={true}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={onMomentumScrollBegin}
        ListFooterComponent={
          handleLoadMoreLoading ? (
            <Box paddingY={1}>
              <Spinner />
            </Box>
          ) : null
        }
        ListEmptyComponent={
          <Box style={styles.emptyComponentStyle}>
            <EmptyListComponent
              IconComponent={EmptypageData.IconComponent}
              iconSize={EmptypageData.iconSize}
              title={EmptypageData.title}
              subTitle={EmptypageData.subTitle}
            />
          </Box>
        }
      />
    </Box>
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyComponentStyle: {
    flex: 1,
    transform: [
      {
        scaleY: -1,
      },
    ],
  },
});
