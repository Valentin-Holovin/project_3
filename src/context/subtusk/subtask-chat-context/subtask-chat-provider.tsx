/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Maybe } from '../../../graphql/generated';
import { useChatManage, useGetSubtaskChatQuery } from '../../../hooks';
import { ChatProvider } from '../../chat-context/chat-provider';
import { SubtaskChatContext } from './subtask-chat-context';

type Props = {
  children: React.ReactNode;
  subtuskId?: Maybe<number>;
};

export const SubtuskChatProvider = ({ children, subtuskId }: Props) => {
  const { data, loading, fetchMore } = useGetSubtaskChatQuery({
    variables: {
      id: subtuskId,
      offset: 0,
      limit: 15,
      type: 'chat',
    },
  });

  const getPrivatChatData = React.useCallback(
    async (offset: number) => {
      if (subtuskId) {
        const data = await fetchMore({
          variables: {
            id: subtuskId || 0,
            offset,
            limit: 15,
            type: 'chat',
          },
        });
        return data.data?.getSubtask?.chat?.messagesList?.rows || [];
      } else return [];
    },
    [subtuskId],
  );

  const { stopHandleLoadMore, ...chatData } = useChatManage({
    chatId: data?.getSubtask.chat.id,
    id: subtuskId,
    length: data?.getSubtask.chat.messagesList.count || 0,
    getPrivatChatData,
  });

  const value = {
    chatId: data?.getSubtask.chat.id,
    id: subtuskId,
    withAvatar: true,
    ...chatData,
    loading,
    stopHandleLoadMore: stopHandleLoadMore.current,
  };

  return (
    <SubtaskChatContext.Provider value={value}>
      <ChatProvider value={value}>{children}</ChatProvider>
    </SubtaskChatContext.Provider>
  );
};
