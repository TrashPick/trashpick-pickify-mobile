import React from 'react'
import { View,StyleSheet,TextInput } from 'react-native'
import Colors from '../constants/Colors'

export default function Input(props){
   if(props.input === "name"){
    return(
        <View style={{paddingHorizontal: 10,}}>
           <View style={styles.textContainer}>
            <TextInput
                    // ref = { input => { this.textInput = input}}
                    style={styles.input}
                    placeholder={props.placeholder}
                    textContentType="name"
                    fontSize={16}
                    placeholderTextColor={Colors.grey}
                    autoFocus={false}
                    maxLength={180}
                    multiline={true}
                    onChange={props.onChange}
                />
           </View>
        </View>
    )
   }else if(props.input === "email"){
    return(
        <View style={{paddingHorizontal: 10,}}>
           <View style={styles.textContainer}>
            <TextInput
                    // ref = { input => { this.textInput = input}}
                    style={styles.input}
                    placeholder={props.placeholder}
                    textContentType="name"
                    fontSize={16}
                    placeholderTextColor={Colors.grey}
                    autoFocus={false}
                    maxLength={180}
                    multiline={true}
                    onChange={props.onChange}
                />
           </View>
        </View>
    )
   }else if(props.input === "password"){
    return(
        <View style={{paddingHorizontal: 10,}}>
           <View style={styles.textContainer}>
            <TextInput
                    // ref = { input => { this.textInput = input}}
                    style={styles.input}
                    placeholder={props.placeholder}
                    textContentType="password"
                    fontSize={16}
                    placeholderTextColor={Colors.grey}
                    autoFocus={false}
                    maxLength={180}
                    multiline={true}
                    onChange={props.onChange}
                />
           </View>
        </View>
    )
   }
}
const styles = StyleSheet.create({
    input: {
		letterSpacing: 0,
		fontSize: 18,
		color: Colors.placeholder,
		fontFamily: "Medium",
      },
      textContainer:{
        borderColor:Colors.grey,
        borderWidth:0.5,
        borderRadius:5,
        padding:10,
      }
})