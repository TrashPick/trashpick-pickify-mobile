import React from 'react';
import { View, Text, StyleSheet,Image,StatusBar,SafeAreaView,TouchableOpacity,TouchableNativeFeedback } from 'react-native'
import {  Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import { MaterialIcons } from '@expo/vector-icons';


function Home({navigation}){
    
    return(
       <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:'row',alignItems:'center',padding:20}}>
                <TouchableNativeFeedback onPress={()=>{navigation.openDrawer()}}>
                    <View style={styles.menu}>
                        <MaterialIcons name="menu" size={24} color="black" />
                    </View> 
                </TouchableNativeFeedback>
                <View style={{paddingLeft:10}}>
                   {/* <Header title="Home" type="tabHeader" /> */}
                </View>
            </View>
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Home</Text>
                </View>
            </View>
       </SafeAreaView>
)
}
Home['navigationOptions']={
    
}
export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    menu:{
        backgroundColor:'white',
        padding:10,
        borderRadius:40,
        elevation:20,
        
    }
})