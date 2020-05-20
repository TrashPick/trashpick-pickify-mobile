import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity,TouchableNativeFeedback,SafeAreaView } from 'react-native'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'



 function Request(){
   
    return(
        <SafeAreaView style={{flex:1}}>
            <Header title="Request" type="tabHeader" />
            <View style={styles.container}>
                 <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Request</Text>
                   </View>
            </View>
        </SafeAreaView>
    )
}
export default Request;
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})