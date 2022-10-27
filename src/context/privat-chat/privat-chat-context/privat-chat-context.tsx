import React from 'react';

import { Maybe, Message } from '../../../graphql/generated';

type ContextProps = {
  id: Maybe<number> | undefined;
  chatId: Maybe<number> | undefined;
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

export const PrivatChatContext = React.createContext<ContextProps>({
  id: null,
  chatId: null,
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

export function usePrivatChatContext() {
  const privatChatContext = React.useContext(PrivatChatContext);

  if (!privatChatContext) {
    throw new Error('usePrivatChatContext must be used within a PrivatChatProvider');
  }
  return privatChatContext;
}
