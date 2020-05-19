import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

class Settings extends React.Component{
    render(){
        return(
                <View style={styles.container}>
                   <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Notification</Text>
                   </View>
                </View>
        )
    }
}
export default Settings;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})