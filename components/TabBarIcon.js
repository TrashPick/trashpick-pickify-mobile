import React from 'react';
import { Ionicons,MaterialIcons,SimpleLineIcons,Octicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
 if(props.icon === 'home'){
  return (
    <Octicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.green : Colors.tabIconDefault}
    />
  );
 }else if(props.icon ==='notification'){
  return (
    <MaterialIcons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.green : Colors.tabIconDefault}
    />
  );
 }
}
