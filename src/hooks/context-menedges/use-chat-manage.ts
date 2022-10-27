import React from 'react';

import { Maybe, Message } from '../../graphql/generated';
import { useDeleteMessageMutation, useSendMessagesMutation } from '../use-mutations';
import { useNewMessage } from '../use-new-message';
import { useMessagesReadBeforeSubscription } from '../use-subscription';

type Props = {
  id: Maybe<number> | undefined;
  chatId: Maybe<number> | undefined;
  getPrivatChatData: (offset: number) => Promise<any>;
  length: number;
};

export const useChatManage = ({ id, chatId, length, getPrivatChatData }: Props) => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const [handleLoadMoreLoading, setHandleLoadMoreLoading] = React.useState<boolean>(false);

  const stopHandleLoadMore = React.useRef(false);

  const [deleteMessageMutation] = useDeleteMessageMutation();

  const [sendMessageMutation, { loading: sendMessageLoading }] = useSendMessagesMutation();

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
    [id],
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
    };
    setFirstData();
  }, [id]);

  React.useEffect(() => {
    if (MessagesReadBeforeSubscriptionData?.messagesReadBefore.message) {
      setMessages((prev) =>
        prev.map((item) => {
          return item.id === MessagesReadBeforeSubscriptionData?.messagesReadBefore.message.id
            ? {
                ...item,
                isRead: true,
              }
            : item;
        }),
      );
    }
  }, [MessagesReadBeforeSubscriptionData]);

  const handleLoadMore = async () => {
    if (!stopHandleLoadMore.current) {
      if (!handleLoadMoreLoading && length > messages.length) {
        setHandleLoadMoreLoading(true);
        const data = await getPrivatChatData(messages.length);
        setPrivatChatData(data as Message[]);
        setHandleLoadMoreLoading(false);
      }

      stopHandleLoadMore.current = true;
    }
  };

  return {
    messages,
    messagesCount: messages.length,
    handleLoadMoreLoading,
    stopHandleLoadMore,
    sendMessageLoading,
    sendMessage,
    setStopHandleLoadMore,
    deleteMessage,
    handleLoadMore,
  };
};
