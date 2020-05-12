import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import Welcome from '../screens/Auth/Welcome'
import Signup from '../screens/Auth/Signup'
import Signin from '../screens/Auth/Signin'
import Forgot from '../screens/Auth/Forgot'
import Verify from '../screens/Auth/Verification'
import Splash from '../screens/Auth/Splash'
import AuthLoading from '../screens/Auth/AuthLoading'
import { createStackNavigator } from 'react-navigation-stack';

const AuthStack = createStackNavigator({
  Welcome:Welcome,
  Signup:Signup,
  Signin:Signin,
  Forgot:Forgot,
  Verify:Verify,
  Splash:Splash,
},
  { initialRouteName:'Welcome',headerMode:"none"}
)
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    AuthLoading:AuthLoading,
    Auth:AuthStack,
    Main: MainTabNavigator,
  })
);
