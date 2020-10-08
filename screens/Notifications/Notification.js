import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,TouchableNativeFeedback } from 'react-native'
import {  Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import { AntDesign } from '@expo/vector-icons'

function Notification({navigation}){
    const renderBackBtn = ()=> {
        return (
          <View>
            {Platform.OS === 'ios' ?
            <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.openDrawer()}>
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="black" size={18} />
            </View>
          </TouchableOpacity>
          :
          <TouchableNativeFeedback onPress={() =>navigation.pop()} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} useForeground={true} >
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="black" size={18} />
            </View>
          </TouchableNativeFeedback>
            }
          </View>
        );
  }
    return(
        <SafeAreaView style={{flex:1}}>
         <Header leftAction={renderBackBtn()} title="Notifications" type="App" />
            <View style={styles.container}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <View style={{paddingVertical:40,justifyContent:'center'}}>
                      <Text style={{fontFamily:'Medium',fontSize:16}}>You have no notifications</Text>
                   </View>
            </View>
            </View>
        </SafeAreaView>
)
}
export default Notification;

const styles = StyleSheet.create({
container:{
    flex:1
}
})