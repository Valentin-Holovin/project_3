import React from 'react';

import { newActivityDto } from '../services';
import { useGetProjectActivitiesQuery } from './use-queries';
import { useNewActivitySubscription } from './use-subscription';

export const useNewActivity = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    data,
    refetch,
    loading: loadingGetProjectActivities,
    fetchMore,
  } = useGetProjectActivitiesQuery();

  const { data: activity, loading } = useNewActivitySubscription();

  React.useEffect(() => {
    async function getNewActivity() {
      if (!loading && activity?.newActivity === 'taskSubtask' && !isLoading) {
        setIsLoading(true);
        await fetchMore({});
        setTimeout(() => setIsLoading(false), 5000);
      }
    }
    getNewActivity();
  }, [activity]);

  return {
    data: newActivityDto(data),
    refetch,
    setIsLoading,
    count: data?.getProjectActivities?.length || 0,
    loading: loadingGetProjectActivities,
  };
};
