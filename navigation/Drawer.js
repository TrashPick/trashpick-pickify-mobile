import React from 'react'
import { DrawerItems,createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaView,StyleSheet,View,ScrollView,Text, Platform } from 'react-native'
import { EvilIcons,Ionicons,SimpleLineIcons,AntDesign,Feather } from '@expo/vector-icons';
import Search from '../screens/Search/Search';
import Help from '../screens/Help/Help';
import Settings from '../screens/Settings/Settings';
import Profile from '../screens/Profile/Profile';
import MainTabNavigator from './MainTabNavigator';
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import Fonts from '../constants/Fonts'
import UserAvatar from 'react-native-user-avatar'

const Label = (props)=>(
 <View style={styles.labelContainer}>
    <Text style={styles.label}>{props.name}</Text>
 </View>
)
const CustomComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:30,}}>
          {/* <EvilIcons name="user" size={104} color={Colors.grey} /> */}
          <UserAvatar size={50} name="Kwame Agyenim" bgColor={Colors.green} />
          {Platform === "ios" ? 
          <View style={{flexDirection:'column',}}>
            <Text style={styles.title}>Kwame Agyenim - Boateng</Text>
            <Text style={styles.text}>kwameagyenimboateng64@gmail.com</Text>   
          </View>:
          <View style={{flexDirection:'column',paddingLeft:20}}>
            <Text style={styles.title}>Kwame Agyenim - Boateng</Text>
            <Text style={styles.text}>kwameagyenimboateng64@gmail.com</Text>   
          </View>}
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
  // drawerType:"slide",
  drawerWidth:350,
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
  },
  title:{
    fontFamily:"Medium",
    fontSize:Fonts.t2,
    letterSpacing:-0.2,
    color:Colors.black, 
  },
  text:{
    fontFamily:"Medium",
    fontSize:14,
    letterSpacing:-0.2,
    color:Colors.grey,
  }
});