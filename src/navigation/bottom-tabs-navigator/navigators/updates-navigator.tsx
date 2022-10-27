import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../../../constants';
import { Updates } from '../../../pages';
import { UpdatesStackParamList } from '../../../types/navigations';

const Stack = createNativeStackNavigator<UpdatesStackParamList>();

export const UpdatesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.updates}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.updates} component={Updates} />
    </Stack.Navigator>
  );
};
