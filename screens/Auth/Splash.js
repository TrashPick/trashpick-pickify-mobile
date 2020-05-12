import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import Colors from '../../constants/Colors'


export default function Splash(){
    return(
        <View style={styles.container}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text style={styles.title}>Pickify</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.green
    },
    title:{
        // fontFamily:"Medium",
        fontSize:36,
        color:"white",
        letterSpacing:-0.3 
    }
})