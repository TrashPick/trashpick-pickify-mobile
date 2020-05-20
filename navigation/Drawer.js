import React from 'react'
import { DrawerItems,createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaView,StyleSheet,View,ScrollView,Text } from 'react-native'
import { EvilIcons,Ionicons,SimpleLineIcons,AntDesign,Feather } from '@expo/vector-icons';
import Search from '../screens/Search/Search';
import Help from '../screens/Help/Help';
import Settings from '../screens/Settings/Settings';
import Profile from '../screens/Profile/Profile';
import MainTabNavigator from './MainTabNavigator';
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const Label = (props)=>(
 <View style={styles.labelContainer}>
    <Text style={styles.label}>{props.name}</Text>
 </View>
)
const CustomComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
      <View style={{justifyContent:'center',alignItems:'center',paddingVertical:20}}>
          <EvilIcons name="user" size={104} color={Colors.grey} />
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
        <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const SettingsStack = createStackNavigator(
  {
    Setttings:Settings
},{
  headerMode:"none"
}
) 
const ProfileStack = createStackNavigator(
  {
    Profile:Profile
},{
  headerMode:"none"
}
) 
const HelpStack = createStackNavigator(
  {
    Help:Help
},{
  headerMode:"none"
}
) 
const MainDrawer = createDrawerNavigator(
  {
   MainTabNavigator:{
     screen:MainTabNavigator,
     navigationOptions:{
      drawerIcon:()=>(
      <Feather name="clock" size={22} color="#7e7e7e"/>
     ),
     drawerLabel:()=>(
       <Label name="Recent"/>
     )
    }
   },
   ProfileStack:{
     screen:ProfileStack,
     navigationOptions:{
      //  drawerLockMode:'locked-closed',
       drawerIcon:({focused})=>(
        // <AntDesign focused={focused} name="user" size={22} color={Colors.black}/>
        <Feather focused={focused} name="user" size={24}  color={Colors.black} />
      ),
      drawerLabel:()=>(
        <Label name="Profile"/>
      )
     }
   },
   HelpStack:{
     screen:HelpStack,
     navigationOptions:{
      // drawerLockMode:'locked-closed',
      drawerIcon:({focused})=>(
        // <Ionicons focused={focused} name="ios-help-circle-outline" size={22} color={Colors.black} />
        <Feather focused={focused} name="alert-circle" size={22} color={Colors.black}   />
      ),
      drawerLabel:()=>(
        <Label name="Help & Feedback"/>
      )
     }
   },
   SettingsStack:{
     screen:SettingsStack,
     navigationOptions:{
      // drawerLockMode:'locked-closed',
      drawerIcon:({focused})=>(
        // <SimpleLineIcons focused={focused} name="settings" size={20} color={Colors.black} />
        <Feather focused={focused} name="settings" size={22} color={Colors.black}  />
      ),
      drawerLabel:()=>(
        <Label name="Settings"/>
      )
     }
   },

},{
  contentComponent:CustomComponent,
  drawerType:"slide",
  // drawerWidth:300,
  contentOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor:Colors.grey,
        itemsContainerStyle: {
          marginVertical: 0,
        },
        
      }
}
)

export default MainDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer:{
    paddingVertical:20
  },
  label:{
    textAlign:'center',
    fontFamily:'Medium',
    fontSize:16,
    color:Colors.black
  }
});