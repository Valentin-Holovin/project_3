import * as GENERATED from '../../graphql/generated/index';

type Props = {
  skip: boolean;
  variables: GENERATED.MessagesReadBeforeSubscriptionVariables;
};

export const useMessagesReadBeforeSubscription = (options: Props) => {
  return GENERATED.useMessagesReadBeforeSubscription(options);
};
