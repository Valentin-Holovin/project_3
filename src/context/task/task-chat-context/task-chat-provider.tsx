/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Maybe } from '../../../graphql/generated';
import { useChatManage, useGetTaskChatQuery } from '../../../hooks';
import { ChatProvider } from '../../chat-context/chat-provider';
import { TaskChatContext } from './task-chat-context';

type Props = {
  children: React.ReactNode;
  taskId?: Maybe<number>;
};

export const TaskChatProvider = ({ children, taskId }: Props) => {
  const { data, loading, fetchMore } = useGetTaskChatQuery({
    variables: {
      id: taskId || 0,
      offset: 0,
      limit: 15,
      type: 'chat',
    },
  });

  const getPrivatChatData = React.useCallback(
    async (offset: number) => {
      if (taskId) {
        const data = await fetchMore({
          variables: {
            id: taskId || 0,
            offset,
            limit: 15,
            type: 'chat',
          },
        });
        return data.data?.getTaskChat?.chat?.messagesList?.rows || [];
      } else return [];
    },
    [taskId],
  );

  const { stopHandleLoadMore, ...chatData } = useChatManage({
    chatId: data?.getTaskChat.chat.id,
    id: taskId,
    length: data?.getTaskChat.chat.messagesList.count || 0,
    getPrivatChatData,
  });

  const value = {
    chatId: data?.getTaskChat.chat.id,
    id: taskId,
    withAvatar: true,
    ...chatData,
    loading,
    stopHandleLoadMore: stopHandleLoadMore.current,
  };

  return (
    <TaskChatContext.Provider value={value}>
      <ChatProvider value={value}>{children}</ChatProvider>
    </TaskChatContext.Provider>
  );
};
