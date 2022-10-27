/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/no-nested-ternary */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import {
  AccountFocusedIcon,
  AccountIcon,
  ChatsFocusedIcon,
  ChatsIcon,
  ProjectsFocusedIcon,
  ProjectsIcon,
  TasksFocusedIcon,
  TasksIcon,
  UpdatesFocusedIcon,
  UpdatesIcon,
} from '../../components';
import { IS_ANDROID, ROUTES } from '../../constants';
import { useKeyboardStatus, useNewActivity, useNewChatActivity } from '../../hooks';
import { BottomTabBar } from './bottom-tab-bar';
import {
  AccountNavigator,
  ChatsNavigator,
  ProjectsNavigator,
  TasksNavigator,
  UpdatesNavigator,
} from './navigators';

export type BottomTabsStackParamList = {
  [ROUTES.updatesNavigator]: undefined;
  [ROUTES.chatsNavigator]: undefined;
  [ROUTES.projectsNavigator]: undefined;
  [ROUTES.tasksNavigator]: undefined;
  [ROUTES.accountNavigator]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsStackParamList>();

export const BottomTabsNavigator = () => {
  const isKeyboardOpen = useKeyboardStatus();

  const { count } = useNewActivity();
  const { count: countChats } = useNewChatActivity();

  return (
    <Tab.Navigator
      tabBar={!IS_ANDROID ? BottomTabBar : !isKeyboardOpen ? BottomTabBar : () => null}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'primary.100',
        tabBarInactiveTintColor: 'primary.100',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#000000',
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.updatesNavigator}
        component={UpdatesNavigator}
        options={{
          tabBarBadge: count,
          tabBarLabel: 'Обновления',
          tabBarIcon: ({ focused, size }) => {
            return focused ? <UpdatesFocusedIcon size={size} /> : <UpdatesIcon size={size} />;
          },
          tabBarStyle: {
            flex: 0.26, //25.85
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.chatsNavigator}
        component={ChatsNavigator}
        options={{
          tabBarBadge: countChats,
          tabBarLabel: 'Чаты',
          tabBarIcon: ({ focused, size }) => {
            return focused ? <ChatsFocusedIcon size={size} /> : <ChatsIcon size={size} />;
          },
          tabBarStyle: {
            flex: 0.14, //13.9
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.projectsNavigator}
        component={ProjectsNavigator}
        options={{
          tabBarLabel: 'Проекты',
          tabBarIcon: ({ focused, size }) => {
            return focused ? <ProjectsFocusedIcon size={size} /> : <ProjectsIcon size={size} />;
          },
          tabBarStyle: {
            flex: 0.2, //20.45
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.tasksNavigator}
        component={TasksNavigator}
        options={{
          tabBarLabel: 'Задачи',
          tabBarIcon: ({ focused, size }) => {
            return focused ? <TasksFocusedIcon size={size} /> : <TasksIcon size={size} />;
          },
          tabBarStyle: {
            flex: 0.19, //19.03
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.accountNavigator}
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Аккаунт',
          tabBarIcon: ({ focused, size }) => {
            return focused ? <AccountFocusedIcon size={size} /> : <AccountIcon size={size} />;
          },
          tabBarStyle: {
            flex: 0.21, //20.73
          },
        }}
      />
    </Tab.Navigator>
  );
};
