import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Notification extends React.Component{
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
export default Notification;

const styles = StyleSheet.create({
container:{
    flex:1
}
})