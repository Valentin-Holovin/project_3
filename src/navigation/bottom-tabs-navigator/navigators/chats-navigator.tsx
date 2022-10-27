import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../../../constants';
import { Chats } from '../../../pages';
import { ChatsStackParamList } from '../../../types/navigations';

const Stack = createNativeStackNavigator<ChatsStackParamList>();

export const ChatsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.chats}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.chats} component={Chats} />
    </Stack.Navigator>
  );
};
