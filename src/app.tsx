import { ApolloProvider } from '@apollo/client';
import { registerRootComponent } from 'expo';
import * as Linking from 'expo-linking';
import * as Notifications from 'expo-notifications';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from './context/auth-context';
import { ModalsProvider } from './context/modal-context/modal-provider';
import { NavigationProvider } from './context/navigation-context';
import { PushNotificationsProvider } from './context/push-notifications-context/push-notifications-provider';
import { client } from './graphql/client/client';
import { config, theme } from './theme';

const App = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  LogBox.ignoreLogs([
    'Require cycle:',
    'NativeBase: The contrast ratio',
    'forwardRef render',
    'VirtualizedLists should never be nested inside plain ScrollViews',
  ]);

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <ModalsProvider>
          <NativeBaseProvider theme={theme} config={config}>
            <PushNotificationsProvider>
              <AuthProvider>
                <NavigationProvider />
              </AuthProvider>
            </PushNotificationsProvider>
          </NativeBaseProvider>
        </ModalsProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default registerRootComponent(App);
