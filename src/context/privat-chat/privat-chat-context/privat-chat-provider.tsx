import React from 'react';

import { PRIVAT_CHATS_FRAGMENT } from '../../../graphql/fragments/privat-chats-fragment.gql';
import { Maybe, Message, User } from '../../../graphql/generated';
import {
  useDeleteMessageMutation,
  useGetOrCreatePrivateChatMutation,
  useMessagesReadBeforeSubscription,
  useNewMessage,
  useReadMessagesBeforeMutation,
  useSendMessagesMutation,
} from '../../../hooks';
import { ChatProvider } from '../../chat-context/chat-provider';
import { PrivatChatContext } from './privat-chat-context';

type Props = {
  children: React.ReactNode;
  chatId?: Maybe<number>;
  userId?: Maybe<number>;
  setChatId: (chatId: number) => void;
};

export const PrivatChatProvider = ({ children, chatId, userId, setChatId }: Props) => {
  const [getOrCreatePrivateChatMutation, { data, loading }] = useGetOrCreatePrivateChatMutation();

  const [messages, setMessages] = React.useState<Message[]>([]);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState<boolean>(false);

  const stopHandleLoadMore = React.useRef(false);

  const [deleteMessageMutation] = useDeleteMessageMutation();

  const [sendMessageMutation, { loading: sendMessageLoading }] = useSendMessagesMutation();

  const [readMessagesBeforeMutation] = useReadMessagesBeforeMutation();

  const { data: MessagesReadBeforeSubscriptionData } = useMessagesReadBeforeSubscription({
    skip: !chatId,
    variables: {
      chatId: Number(chatId),
    },
  });

  useNewMessage({
    setMessages,
    chatId: chatId || 0,
  });

  const getPrivatChatData = React.useCallback(
    async (offset: number) => {
      const data = await getOrCreatePrivateChatMutation({
        variables: {
          userId: userId || 0,
          offset,
          limit: 15,
        },
      });
      if (!chatId) {
        setChatId(Number(data.data?.getOrCreatePrivateChat?.id));
      }
      return data.data?.getOrCreatePrivateChat?.messagesList?.rows || [];
    },
    [chatId],
  );

  const setPrivatChatData = React.useCallback(
    (data: Message[]) => setMessages((prev) => [...prev, ...(data || [])] as Message[]),
    [],
  );

  const setStopHandleLoadMore = React.useCallback((value: boolean) => {
    stopHandleLoadMore.current = value;
  }, []);

  const deleteMessage = React.useCallback(
    async (messageId: number) => {
      try {
        const data = await deleteMessageMutation({
          variables: {
            messageId: messageId.toString(),
          },
        });
        if (data.data?.deleteMessage) {
          setMessages(
            (prevState: Message[]) =>
              [...prevState.filter((state: Message) => state.id !== messageId)] as Message[],
          );
        }
      } catch {
        throw new Error('deleteMessageMutationError');
      }
    },
    [chatId],
  );

  const sendMessage = React.useCallback(
    async (message: string) => {
      try {
        await sendMessageMutation({
          variables: {
            data: {
              chatId: Number(chatId),
              text: message?.trim(),
            },
          },
        });
        return true;
      } catch {
        return false;
      }
    },
    [chatId],
  );

  React.useEffect(() => {
    const setFirstData = async () => {
      const data = await getPrivatChatData(0);
      setMessages((data || []) as Message[]);
      if (data.length > 0) {
        await readMessagesBeforeMutation({
          variables: {
            messageId: data[0]?.id || 0,
          },
          update(cache) {
            cache.updateFragment(
              {
                id: `User:${userId}`,
                fragment: PRIVAT_CHATS_FRAGMENT,
              },
              (data: User | null) => {
                return {
                  ...data,
                  chats: data?.chats?.map((item) => ({
                    ...item,
                    unreadMessagesCount: 0,
                  })),
                };
              },
            );
          },
        });
      }
    };
    setFirstData();
  }, [chatId]);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if ((data?.getOrCreatePrivateChat?.messagesList.count || 0) > messages.length) {
        setHandleLoadMoreLoading(true);
        const data = await getPrivatChatData(messages.length);
        setPrivatChatData(data as Message[]);
        setHandleLoadMoreLoading(false);
      }

      stopHandleLoadMore.current = true;
    }
  };

  const value = {
    id: chatId,
    chatId,
    messages,
    messagesCount: messages.length,
    loading,
    handleLoadMore,
    setStopHandleLoadMore,
    deleteMessage,
    sendMessage,
    stopHandleLoadMore: stopHandleLoadMore.current,
    handleLoadMoreLoading,
    sendMessageLoading,
  };

  return (
    <PrivatChatContext.Provider value={value}>
      <ChatProvider value={value}>{children}</ChatProvider>
    </PrivatChatContext.Provider>
  );
};
