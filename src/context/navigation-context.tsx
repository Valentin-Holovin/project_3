import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import React from 'react';

import { ROUTES } from '../constants';
import { navigationRef } from '../navigation/root-navigation';
import { RootNavigator } from '../navigation/root-navigator';

export const NavigationContext = React.createContext<null>(null);

export const prefix = Linking.createURL('barduck://app/');

export const NavigationProvider = () => {
  return (
    <NavigationContext.Provider value={null}>
      <NavigationContainer
        ref={navigationRef}
        linking={{
          prefixes: [prefix],
          config: {
            screens: {
              [ROUTES.mainNavigator]: {
                path: ROUTES.mainNavigator,
                screens: {
                  [ROUTES.chat]: {
                    path: ROUTES.chat,
                    parse: {
                      item: (item: string) => JSON.parse(item),
                    },
                  },
                  [ROUTES.task]: {
                    path: ROUTES.task,
                    parse: {
                      id: Number,
                    },
                  },
                  [ROUTES.subtusk]: {
                    path: ROUTES.subtusk,
                    parse: {
                      id: Number,
                    },
                  },
                },
              },
            },
          },
        }}
      >
        <RootNavigator />
      </NavigationContainer>
    </NavigationContext.Provider>
  );
};
