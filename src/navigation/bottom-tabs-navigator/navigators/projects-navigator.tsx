import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../../../constants';
import { Projects } from '../../../pages';
import { CreateOrUpdateTask } from '../../../pages/create-or-update-task/create-or-update-tasks';
import { ProjectsStackParamList } from '../../../types/navigations';

const Stack = createNativeStackNavigator<ProjectsStackParamList>();

export const ProjectsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.projects}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.projects} component={Projects} />
      <Stack.Screen name={ROUTES.createOrUpdateTask} component={CreateOrUpdateTask} />
    </Stack.Navigator>
  );
};
