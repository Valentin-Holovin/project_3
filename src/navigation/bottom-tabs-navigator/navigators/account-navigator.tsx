/* eslint-disable unicorn/filename-case */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../../../constants';
import { Account, User, Users } from '../../../pages';
import { AccountStackParamList } from '../../../types/navigations';

const Stack = createNativeStackNavigator<AccountStackParamList>();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.account}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.account} component={Account} />
      <Stack.Screen name={ROUTES.users} component={Users} />
      <Stack.Screen name={ROUTES.user} component={User} />
    </Stack.Navigator>
  );
};
