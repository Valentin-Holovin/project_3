import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../../../constants';
import { Tasks } from '../../../pages';
import { TasksStackParamList } from '../../../types/navigations';

const Stack = createNativeStackNavigator<TasksStackParamList>();

export const TasksNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.tasks}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.tasks} component={Tasks} />
    </Stack.Navigator>
  );
};
