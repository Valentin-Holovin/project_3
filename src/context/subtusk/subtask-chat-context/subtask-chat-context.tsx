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

export const SubtaskChatContext = React.createContext<ContextProps>({
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

export function useSubtaskContext() {
  const subtaskChatContext = React.useContext(SubtaskChatContext);

  if (!subtaskChatContext) {
    throw new Error('useSubtaskChatContext must be used within a SubtaskChatProvider');
  }
  return subtaskChatContext;
}
