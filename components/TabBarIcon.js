import React from 'react';
import { Ionicons,MaterialCommunityIcons,Feather,Octicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
 if(props.icon === 'home'){
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.green : Colors.tabIconDefault}
    />
  );
 }else if(props.icon ==='account'){
  return (
    <Feather
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.green : Colors.tabIconDefault}
    />
  );
 }
 else if(props.icon ==='request'){
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.green : Colors.tabIconDefault}
    />
  );
 }
}
