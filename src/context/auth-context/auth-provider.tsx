import * as Linking from 'expo-linking';
import * as Notifications from 'expo-notifications';
import { Center, Spinner } from 'native-base';
import React, { Dispatch } from 'react';

import { NotificationsType, ROUTES } from '../../constants';
import { client } from '../../graphql/client/client';
import { User } from '../../graphql/generated';
import {
  useAlertMessage,
  useGetCurrentUserLazyQuery,
  useLogoutMutation,
  usePushNotifications,
  useRefreshPushTokenMutation,
} from '../../hooks';
import useCachedResources from '../../hooks/use-cached-resources';
import { AsyncStore } from '../../services';
import { prefix } from '../navigation-context';
import { ActionType, handleInit, handleLogout, handleSuccessAuth } from './auth-actions';
import { AuthContext } from './auth-context';
import { authReducer } from './auth-reducer';

type Props = {
  children: React.ReactNode;
};

type LinkingAction = {
  action: (url: string) => Promise<true>;
  data: string;
};

const getDeepLinkUrl = (data) => {
  switch (data?.type) {
    case NotificationsType.chat:
      return `${prefix}/${ROUTES.mainNavigator}/${ROUTES.chat}?item=${JSON.stringify(data.item)}`;
    case NotificationsType.task:
      return `${prefix}/${ROUTES.mainNavigator}/${ROUTES.task}?id=${data?.taskId}`;
    case NotificationsType.subtask:
      return `${prefix}/${ROUTES.mainNavigator}/${ROUTES.subtusk}?id=${data?.subtaskId}`;
    default:
      return '';
  }
};

// eslint-disable-next-line prefer-const
export let dispatchAuth = null as unknown as Dispatch<ActionType>;

export const AuthProvider = ({ children }: Props) => {
  const [getCurrentUser, { data, refetch }] = useGetCurrentUserLazyQuery();

  const [refreshPushTokenMutation] = useRefreshPushTokenMutation();
  const [logoutMutation] = useLogoutMutation();
  const { isLoadingComplete } = useCachedResources();
  const { alertMessage } = useAlertMessage();

  const { getPushNotificationsData, deviceId, token } = usePushNotifications();

  const [state, dispatch] = React.useReducer(authReducer, {
    isAuth: false,
    isInit: false,
  });

  const [linkingAction, setLinkingAction] = React.useState<null | LinkingAction>(null);

  dispatchAuth = dispatch;

  const lastNotificationResponce = Notifications.useLastNotificationResponse();

  const successAuth = async (token: string) => {
    await AsyncStore.setValue('token', token);
    handleSuccessAuth();
    await getCurrentUser();
  };

  const logout = async () => {
    const data = await logoutMutation({
      variables: {
        data: {
          pushToken: {
            ...getPushNotificationsData(),
          },
        },
      },
    });
    if (!data.data?.logout) {
      alertMessage({
        title: 'Не удалось отписаться от push-notifications, попробуйте позже',
      });
    }
    await AsyncStore.deleteValue('token');
    handleLogout();
    await client.resetStore();
  };

  React.useEffect(() => {
    async function checkToken() {
      handleInit(true);
      try {
        const token = await AsyncStore.getValue('token');
        if (token != null) {
          await getCurrentUser();
          handleSuccessAuth();
        }
      } finally {
        handleInit(false);
      }
    }
    checkToken();
  }, []);

  React.useEffect(() => {
    const refreshPushToken = async () => {
      if (data?.getCurrentUser?.id && deviceId && token) {
        const data = await refreshPushTokenMutation({
          variables: {
            data: {
              ...getPushNotificationsData(),
            },
          },
        });
        if (!data.data?.refreshPushToken.status) {
          alertMessage({
            title: 'Ошибка на сервере с push-notifications, попробуйте позже',
          });
        }
      }
    };
    refreshPushToken();
  }, [data?.getCurrentUser?.id, deviceId, getPushNotificationsData, token]);

  React.useEffect(() => {
    if (
      lastNotificationResponce &&
      lastNotificationResponce.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      const data = lastNotificationResponce?.notification?.request?.content?.data;

      const url = getDeepLinkUrl(data);

      setLinkingAction({
        action: (url) => Linking.openURL(url),
        data: url,
      });
    }
  }, [lastNotificationResponce]);

  React.useEffect(() => {
    if (linkingAction && state.isAuth && !state.isInit && isLoadingComplete) {
      setTimeout(() => {
        linkingAction.action(linkingAction.data);
        setLinkingAction(null);
      }, 1000);
    }
  }, [state.isAuth, state.isInit, isLoadingComplete, linkingAction]);

  const value = {
    isAuth: state.isAuth,
    onSuccessAuth: successAuth,
    onLogout: logout,
    refetchUserData: refetch,
    currentUserData: data?.getCurrentUser as User,
  };

  if (state.isInit || !isLoadingComplete) {
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
