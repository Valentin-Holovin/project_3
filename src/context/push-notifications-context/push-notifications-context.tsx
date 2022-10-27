import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type ContextProps = {
  token: string;
  deviceId: string;
  getPushNotificationsData: () => {
    token: string;
    deviceId: string;
    appPlatform: string;
  };
};

export const PushNotificationsContext = React.createContext<ContextProps>({
  token: '',
  deviceId: '',

  getPushNotificationsData: () => ({
    token: '',
    deviceId: '',
    appPlatform: '',
  }),
});

export function usePushNotificationsContext() {
  const pushNotificationsContext = React.useContext(PushNotificationsContext);

  if (!pushNotificationsContext) {
    throw new Error('usePushNotificationsContext must be used within a PushNotificationsProvider');
  }
  return pushNotificationsContext;
}
