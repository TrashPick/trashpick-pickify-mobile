import React from 'react'
import { DrawerItems,createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaView,StyleSheet,View,ScrollView,Text, Platform } from 'react-native'
import { MaterialIcons,Feather } from '@expo/vector-icons';
import Search from '../screens/Search/Search';
import Help from '../screens/Help/Help';
import Settings from '../screens/Settings/Settings';
import Notification from '../screens/Notifications/Notification'
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
  <SafeAreaView style={{flex:1,}}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:0,paddingHorizontal:40,}}>
          <UserAvatar size={60} name="Kwame Agyenim" bgColor={Colors.green} />
          {Platform === "ios" ? 
          <View style={{flexDirection:'column',}}>
            <Text style={styles.title}>Kwame Agyenim - Boateng</Text>
            <Text style={styles.text}>kwameagyenimboateng64@gmail.com</Text>   
          </View>:
          <View style={{flexDirection:'column',paddingLeft:10}}>
            <Text style={styles.title}>Kwame Agyenim - Boateng</Text>
            <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>kwameagyenimboateng64@gmail.comsasdsadasd</Text>   
          </View>}
          <View style={{borderBottomColor:Colors.border,borderBottomWidth:1}}></View>
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
const NotificationStack = createStackNavigator(
  {
    Notification:Notification
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
   NotificationStack:{
     screen:NotificationStack,
     navigationOptions:{
       drawerIcon:({focused})=>(
        // <AntDesign focused={focused} name="user" size={22} color={Colors.black}/>
        <MaterialIcons name="notifications-none" size={24} color={Colors.black} />
      ),
      drawerLabel:()=>(
        <Label name="Notifications"/>
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
      drawerIcon:({focused})=>(
        // <SimpleLineIcons focused={focused} name="settings" size={20} color={Colors.black} />
        <Feather focused={focused} name="settings" size={20} color={Colors.black}  />
      ),
      drawerLabel:()=>(
        <Label name="Settings"/>
      )
     }
   },

},{
  contentComponent:CustomComponent,
  // drawerType:"slide",
  drawerWidth:330,
  contentOptions: {
        activeTintColor:Colors.green,
        inactiveTintColor:Colors.grey,
        itemsContainerStyle: {
          marginVertical: 0,
          // marginHorizontal:20
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
    paddingVertical:25
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
    letterSpacing:0.2,
    color:Colors.black, 
  },
  text:{
    fontFamily:"Medium",
    fontSize:14,
    letterSpacing:0.2,
    color:Colors.textColor,
  }
});