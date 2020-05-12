import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import Details from '../screens/Auth/Details'
import Welcome from '../screens/Auth/Welcome'
import Signup from '../screens/Auth/Signup'
import Signin from '../screens/Auth/Signin'
import Forgot from '../screens/Auth/Forgot'
import Verify from '../screens/Auth/Verification'
import Splash from '../screens/Auth/Splash'
import AuthLoading from '../screens/Auth/AuthLoading'
import { createStackNavigator } from 'react-navigation-stack';

const FirstAuthStack = createStackNavigator({
  Details:Details,
},
{ initialRouteName:'Details',headerMode:"none"}
)
const SecondAuthStack = createStackNavigator({
  Welcome:Welcome,
  Signup:Signup,
  Signin:Signin,
  Forgot:Forgot,
  Verify:Verify,
  Splash:Splash,
},
  { headerMode:"none"}
)
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    AuthLoading:AuthLoading,
    AuthDetails:FirstAuthStack,
    Auth:SecondAuthStack,
    Main: MainTabNavigator,
  })
);
