import * as Application from 'expo-application';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Center, Spinner } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';

import { useAlertMessage } from '../../hooks';
import { PushNotificationsContext } from './push-notifications-context';

type Props = {
  children: React.ReactNode;
};

export const PushNotificationsProvider = ({ children }: Props) => {
  const { alertMessage } = useAlertMessage();

  const [token, setToken] = React.useState('');
  const [tokenLoading, setTokenLoading] = React.useState(false);
  const [deviceId, setDeviceId] = React.useState('');
  const [deviceIdLoading, setDeviceIdLoading] = React.useState(false);

  const getPushNotificationsData = React.useCallback(() => {
    return {
      token: token,
      deviceId: deviceId || '',
      appPlatform: 'EXPO',
    };
  }, [deviceId, token]);

  React.useEffect(() => {
    const getDeviceId = async () => {
      try {
        setDeviceIdLoading(true);
        if (Platform.OS === 'android') {
          const deviceId = Application.androidId || '';
          setDeviceId(deviceId);
        }
        if (Platform.OS === 'ios') {
          const deviceId = (await Application.getIosIdForVendorAsync()) || '';
          setDeviceId(deviceId);
        }
      } finally {
        setDeviceIdLoading(false);
      }
    };
    getDeviceId();
  }, []);

  React.useEffect(() => {
    const getExpoPushNotification = async () => {
      try {
        setTokenLoading(true);
        if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          // eslint-disable-next-line unicorn/no-await-expression-member
          const token = (await Notifications.getExpoPushTokenAsync()).data;
          setToken(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      } catch {
        alertMessage({
          title: 'Оййй!',
          message: 'Что-то случилось с push-notifications, мы стараемся это исправить',
        });
      } finally {
        setTokenLoading(false);
      }
    };
    getExpoPushNotification();
  }, []);

  const value = {
    token,
    deviceId,
    getPushNotificationsData,
  };

  if (tokenLoading || deviceIdLoading) {
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );
  }

  return (
    <PushNotificationsContext.Provider value={value}>{children}</PushNotificationsContext.Provider>
  );
};
