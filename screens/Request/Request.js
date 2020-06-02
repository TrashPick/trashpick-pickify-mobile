import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity,TouchableNativeFeedback,SafeAreaView } from 'react-native'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import Button from '../../components/Button'



 function Request({navigation}){
   
    return(
        <SafeAreaView style={{flex:1}}>
            {/* <Header title="Request" type="App" /> */}
            <View style={styles.container}>
                 <View style={{justifyContent:'center',alignItems:'center',flex:1,paddingTop:90}}>
                    <Text style={{textAlign:'center',fontFamily:'Bold',fontSize:16}}>Want to request pickup?</Text>
                   <View style={{paddingVertical:40,justifyContent:'center'}}>
                      <Text style={{fontFamily:'Medium',fontSize:16}}>Start scheduling your first pickup on Pickify</Text>
                   </View>
                </View>
                    <View style={styles.btnContainer}>
                     <Button type="signup" onClick={()=>{}} title="Take image"/>
                    </View>
            </View>
        </SafeAreaView>
    )
}
export default Request;
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btnContainer:{
        // flex:1,
        justifyContent:'flex-start',
        paddingHorizontal:20,
        marginBottom:80
    },
})