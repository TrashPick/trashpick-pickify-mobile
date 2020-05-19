import React from 'react'
import { View,StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'


export default function Profile(){
    return(
        <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Profile</Text>
                   </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})