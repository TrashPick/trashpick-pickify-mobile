import React from 'react';
import { View, Text, StyleSheet,Image,StatusBar } from 'react-native'
import {  Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

class HomeScreen extends React.Component{
    render(){
        return(
                <View style={styles.container}>
                   <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Home</Text>
                   </View>
                </View>
        )
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})