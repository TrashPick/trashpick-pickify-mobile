import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/Home';
import Notification from '../screens/Notifications/Notification'
import Search from '../screens/Search/Search';
import Message from '../screens/Message/Message';
import Settings from '../screens/Settings/Settings';
import Request from '../screens/Request/Request'
import Profile from '../screens/Profile/Profile';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  { headerMode: 'none' },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};
HomeStack.path = '';

const RequestStack = createStackNavigator(
  {
    Search: Request,
  },
  { headerMode: 'none' },
  config
);
RequestStack.navigationOptions = {
  tabBarLabel: 'Request',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'ios-search'
      }
    />
  ),
};
RequestStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: Settings,
  },
  { headerMode: 'none' },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  RequestStack,
  SettingsStack,
 
});

tabNavigator.path = '';

export default tabNavigator;
