import React from 'react';

import { useAppActive } from './use-app-active';
import { useGetPrivateChatsQuery } from './use-queries';
import { useNewActivitySubscription } from './use-subscription';

export const useNewChatActivity = (search?: string) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const limitPerChat = 20;

  const {
    data,
    refetch,
    loading: loadingGetPrivateChatsQuery,
  } = useGetPrivateChatsQuery({
    variables: {
      data: {
        limit: limitPerChat,
        offset: 0,
        name: search || undefined,
      },
    },
  });

  const { data: activity, loading } = useNewActivitySubscription();

  const { appStateVisible } = useAppActive();

  React.useEffect(() => {
    async function getNewActivity() {
      if (!loading && activity?.newActivity === 'message' && !isLoading) {
        setIsLoading(true);
        await refetch();
        setTimeout(() => setIsLoading(false), 2500);
      }
    }
    getNewActivity();
  }, [activity]);

  React.useEffect(() => {
    if (appStateVisible === 'active') {
      refetch();
    }
  }, [appStateVisible]);

  const totalUnreadMessagesCount = () => {
    const counts = [0];

    for (const row of data?.getPrivateChats.rows.filter((row) => row.chats?.length) || []) {
      if (row?.chats) {
        counts.push(row?.chats[0].unreadMessagesCount);
      }
    }

    return counts.reduce((a, b) => b + a);
  };

  return {
    data: data?.getPrivateChats.rows || [],
    refetch,
    count: totalUnreadMessagesCount(),
    loading: loadingGetPrivateChatsQuery,
  };
};
