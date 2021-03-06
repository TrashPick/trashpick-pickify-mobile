import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      'Bold':require('./assets/fonts/AirbnbCerealExtraBold.ttf'),
      'SemiBold':require('./assets/fonts/AirbnbCerealBold.ttf'),
      'Medium':require('./assets/fonts/AirbnbCerealMedium.ttf'),
      'Regular':require('./assets/fonts/AirbnbCerealBook.ttf'),
      'Light':require('./assets/fonts/AirbnbCerealLight.ttf'),
      // 'Bold':require('./assets/fonts/Quicksand-Bold.ttf'),
      // 'SemiBold':require('./assets/fonts/Quicksand-SemiBold.ttf'),
      // 'Medium':require('./assets/fonts/Quicksand-Medium.ttf'),
      // 'Regular':require('./assets/fonts/Quicksand-Regular.ttf'),
      // 'Light':require('./assets/fonts/Quicksand-Light.ttf'),
      

    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
