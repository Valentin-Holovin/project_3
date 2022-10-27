import React from 'react';

import { ChatContext, ContextProps } from './chat-context';

type Props = {
  children: React.ReactNode;
  value: ContextProps;
};

export const ChatProvider = ({ children, value }: Props) => {
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
