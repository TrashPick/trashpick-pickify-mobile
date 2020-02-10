import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native'
import {  Ionicons } from '@expo/vector-icons'

class HomeScreen extends React.Component{
    render(){
        return(
                <View style={{flex:1,backgroundColor:'#f3f3f3',flexDirection:'column'}}>
                    <View style={{paddingHorizontal:30,paddingVertical:5}}>
                        <Text style={{fontSize:30}} >Settings</Text>
                    </View>
                    <View style={{backgroundColor:'white',flexDirection:'row'}}>
                        <View style={{height:100,width:20,flex:2,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../../assets/images/male.jpeg')} style={{width:70,height:70,borderRadius:35}}/>
                        </View>
                        <View style={{backgroundColor:'white',height:100,width:20,flex:4,flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{fontSize:15}}>Kwame Boateng</Text>
                            <Text style={{fontSize:15}}>Apple ID,iCloud,iTunes & App Store</Text>
                        </View>
                        <View style={{height:100,flex:1,alignItems:'center',justifyContent:'center',paddinHorizontal:10}}>
                                <Ionicons size={24} color='grey' name="ios-arrow-forward"/>
                        </View>
                    </View>
                   
                    <View style={{marginTop: 20, flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'white',padding:10}}>
                            <View style={{flexDirection:'row',flex:7}}>
                                <View>
                                    <Text>Finish setting up your iPhone</Text>
                                </View>
                            </View>
                           <View style={{flexDirection:'row',flex:1.5}}>
                                 <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:10,flexDirection:'row'}}>
                                    <View style={{backgroundColor:'red',borderRadius:20,alignItems:'center',width:20,height:20,padding:4,marginHorizontal:5}}>
                                            <Text style={{color:'white',fontSize:10}}>1</Text>
                                    </View>
                                    <Ionicons size={24} color='grey' name="ios-arrow-forward"/>
                                </View>
                           </View>
                    </View>
                </View>
        )
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
   
})