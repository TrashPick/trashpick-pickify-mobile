import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Message extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
             <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Message</Text>
            </View>
         </View>
        )
    }
}
export default Message;

const styles = StyleSheet.create({
container:{
    flex:1
}
})