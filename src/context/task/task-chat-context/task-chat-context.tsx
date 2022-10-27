import React from 'react';

import { Maybe, Message } from '../../../graphql/generated';

type ContextProps = {
  chatId: Maybe<number> | undefined;
  id: Maybe<number> | undefined;
  withAvatar: boolean;
  messages: Message[];
  messagesCount: number;
  loading: boolean;
  stopHandleLoadMore: boolean;
  handleLoadMoreLoading: boolean;
  sendMessageLoading: boolean;
  handleLoadMore: () => Promise<void>;
  setStopHandleLoadMore: (value: boolean) => void;
  deleteMessage: (messageId: number) => Promise<void>;
  sendMessage: (message: string) => Promise<boolean>;
};

export const TaskChatContext = React.createContext<ContextProps>({
  chatId: null,
  id: null,
  withAvatar: true,
  messages: [],
  messagesCount: 0,
  loading: false,
  stopHandleLoadMore: false,
  handleLoadMoreLoading: false,
  sendMessageLoading: false,
  handleLoadMore: async () => {},
  setStopHandleLoadMore: () => {},
  deleteMessage: async () => {},
  sendMessage: async () => false,
});

export function useTaskContext() {
  const taskChatContext = React.useContext(TaskChatContext);

  if (!taskChatContext) {
    throw new Error('useTaskChatContext must be used within a TaskChatProvider');
  }
  return taskChatContext;
}
