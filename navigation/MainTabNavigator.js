import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {  useNavigation} from '@react-navigation/native'
import Button from '../components/Button'
import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/Home';
import Notification from '../screens/Notifications/Notification'
import Request from '../screens/Request/Request'
import Colors from '../constants/Colors';

// const navigation = useNavigation()
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
    <TabBarIcon focused={focused} icon="home" name={Platform.OS === 'ios' ? 'home' : 'home'} />
  ),
};
HomeStack.path = '';

const RequestStack = createStackNavigator(
  {
    Request: Request,
  },
  { headerMode: 'none' },
  config
);
RequestStack.navigationOptions = {
  tabBarLabel: 'Request',
  tabBarIcon: ({focused}) => (
  <Button focused={focused} type="request" onClick={()=>{navigate("Request")}}/>
  ),
};
RequestStack.path = '';

const NotificationStack = createStackNavigator(
  {
    Notification: Notification,
  },
  { headerMode: 'none' },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} icon="notification" name={Platform.OS === 'ios' ? 'notifications-none' : 'notifications-none'} />
  ),
};

NotificationStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  RequestStack,
  NotificationStack,
 
},{
  tabBarOptions: {
      showLabel: true,
      activeTintColor:Colors.green,
      inactiveTintColor :Colors.grey,
      
		}
},{});

tabNavigator.path = '';

export default tabNavigator;
