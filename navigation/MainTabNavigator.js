import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {  useNavigation} from '@react-navigation/native'
import Button from '../components/Button'
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/Home';
import Request from '../screens/Request/Request'
import Profile from '../screens/Profile/Profile'


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
  tabBarLabel: 'Pickups',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} icon="home" name={Platform.OS === 'ios' ? 'home-variant' : 'home-variant'} />
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

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  },
  { headerMode: 'none' },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} icon="account" name={Platform.OS === 'ios' ? 'user' : 'user'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  RequestStack,
  ProfileStack,
},{
  tabBarOptions: {
      showLabel: true,
      activeTintColor:Colors.green,
      inactiveTintColor :Colors.grey,
      
		}
},{});

tabNavigator.path = '';

export default tabNavigator;
