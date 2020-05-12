import React from 'react'
import { View,StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'


export default function Profile(){
    return(
        <View style={styles.container}>
                <Tex>Profile</Tex>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})