import * as GENERATED from '../../graphql/generated/index';

type Props = {
  skip: boolean;
  variables: GENERATED.NewMessageSubscriptionVariables;
};

export const useNewMessageSubscription = (options: Props) => {
  return GENERATED.useNewMessageSubscription(options);
};
