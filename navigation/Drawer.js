import React from 'react'
import { DrawerItems } from 'react-navigation-drawer';
import { SafeAreaView,StyleSheet } from 'react-native'
import Search from '../screens/Search/Search';
import Message from '../screens/Message/Message';
import Settings from '../screens/Settings/Settings';
import Profile from '../screens/Profile/Profile';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});