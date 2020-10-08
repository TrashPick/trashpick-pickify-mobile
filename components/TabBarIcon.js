import React from 'react';
import {View,StyleSheet} from 'react-native'
import { Ionicons,MaterialCommunityIcons,Feather,Octicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
 if(props.icon === 'home'){
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={28}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.green : Colors.tabIconDefault}
    />
  );
 }else if(props.icon ==='account'){
  return (
    <Feather
      name={props.name}
      size={28}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.green : Colors.tabIconDefault}
    />
  );
 }
 else if(props.icon ==='request'){
  return (
    <View style={styles.requestIcon}>
      <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.white : Colors.white}
      />
    </View>
  );
 }
}
const styles = StyleSheet.create({
  requestIcon:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.green,
        width:64,
        height:64,
        borderRadius: 36,
        borderWidth:3,
        borderColor:"white",
        position:'absolute',
        top:-40,
        left:30,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
            },
            android: {
              elevation: 3,
            },           
}),
}
})