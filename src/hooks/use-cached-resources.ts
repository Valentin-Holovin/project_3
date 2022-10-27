/* eslint-disable unicorn/prefer-module */
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          RobotoCondensedLight: require('../assets/fonts/RobotoCondensedLight.ttf'),
          RobotoCondensedRegular: require('../assets/fonts/RobotoCondensedRegular.ttf'),
          RobotoCondensedBold: require('../assets/fonts/RobotoCondensedBold.ttf'),
        });
      } catch (error) {
        // We might want to provide this error information to an error reporting service
        console.warn(error);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return {
    isLoadingComplete,
  };
}
