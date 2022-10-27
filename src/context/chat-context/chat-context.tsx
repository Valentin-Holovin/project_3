import React from 'react';

import { Maybe, Message } from '../../graphql/generated';

export type ContextProps = {
  chatId: Maybe<number> | undefined;
  id: Maybe<number> | undefined;
  withAvatar?: boolean;
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

export const ChatContext = React.createContext<ContextProps>({
  chatId: null,
  id: null,
  withAvatar: false,
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

export function useChatContext() {
  const chatContext = React.useContext(ChatContext);

  if (!chatContext) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return chatContext;
}
