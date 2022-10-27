import React from 'react';

import { useAuthContext } from '../context/auth-context';
import { Maybe, Message } from '../graphql/generated';
import { useReadMessagesBeforeMutation } from './use-mutations';
import { useNewMessageSubscription } from './use-subscription';

type Props = {
  chatId?: Maybe<number>;
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
};

export const useNewMessage = ({ setMessages, chatId }: Props) => {
  const { currentUserData } = useAuthContext();

  const { data: newMessageData } = useNewMessageSubscription({
    skip: !chatId,
    variables: {
      chatId: Number(chatId),
    },
  });

  const [readMessagesBeforeMutation] = useReadMessagesBeforeMutation();

  React.useEffect(() => {
    if (newMessageData?.newMessage?.id) {
      setMessages &&
        setMessages((prev: Message[]) => [newMessageData?.newMessage, ...prev] as Message[]);
      if (newMessageData?.newMessage?.user?.login !== currentUserData?.login) {
        readMessagesBeforeMutation({
          variables: {
            messageId: newMessageData?.newMessage?.id,
          },
        });
      }
    }
  }, [newMessageData, currentUserData?.login]);

  return {
    newMessageData,
  };
};
