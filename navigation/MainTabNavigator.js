import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {  useNavigation} from '@react-navigation/native'
import Button from '../components/Button'
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/Home';
import Notification from '../screens/Notifications/Notification'
import Request from '../screens/Request/Request'


// const navigation = useNavigation()
const config = Platform.select({
  web: { headerMode: 'none' },
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
  // <Button focused={focused} type="request" onClick={()=>{navigate("Request")}}/>
   <TabBarIcon focused={focused} icon="request" name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'ios-add-circle-outline'} />
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
