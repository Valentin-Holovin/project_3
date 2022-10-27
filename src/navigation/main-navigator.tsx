/* eslint-disable unicorn/filename-case */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constants';
import { Chat, Subtask, Task } from '../pages';
import { CreateOrUpdateTask } from '../pages/create-or-update-task/create-or-update-tasks';
import { MainStackParamList } from '../types/navigations';
import { BottomTabsNavigator } from './bottom-tabs-navigator/bottom-tabs-navigator';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.bottomTabsNavigator}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.bottomTabsNavigator} component={BottomTabsNavigator} />
      <Stack.Screen name={ROUTES.chat} component={Chat} />
      <Stack.Screen name={ROUTES.task} component={Task} />
      <Stack.Screen name={ROUTES.subtusk} component={Subtask} />
      <Stack.Screen name={ROUTES.createOrUpdateTask} component={CreateOrUpdateTask} />
    </Stack.Navigator>
  );
};
