import React,{useState} from 'react'
import { View,StyleSheet,Text,TouchableNativeFeedback,SafeAreaView,KeyboardAvoidingView,Platform,TouchableOpacity} from 'react-native'
import AuthContext from '../Auth/AuthContext'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Button from '../../components/Button'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import {AntDesign} from '@expo/vector-icons'


export default function Details({navigation}){
    const [name,setName] = useState("");
   
    const nameChange = (target)=>{
      setName(target.nativeEvent.text)
    }
    return(
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
         <KeyboardAvoidingView
						style={{ flex: 1, justifyContent: "center" }}
						behavior={Platform.OS === "android" ? "height" : "padding"}
						keyboardVerticalOffset={10}
						>
            <View style={{justifyContent:'center',flex:1,paddingHorizontal:10,paddingTop:40}}>
                <Text style={styles.name}>What's your name?</Text>
            </View>
            <View style={{justifyContent:'center',flex:1,paddingHorizontal:10,paddingVertical:40}}>
              <View style={styles.nameContainer}>
                <TextInput input="name" placeholder="Username" onChange={value =>{nameChange(value)}}/>
              </View>
            </View>
            <View style={styles.btnContainer}>
               <Button type="signup" onClick={()=>{navigation.navigate("Welcome")}} title="Continue"/>
            </View>
            </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    backBtn:{
        padding:15
    },
    name:{
      fontFamily:"Medium",
      fontSize:Fonts.h3,
      textAlign:'center',
      letterSpacing:-0.2,
      color:Colors.black,
    },
    nameContainer:{
      justifyContent:'center',
    },
    btnContainer:{
      flex:1,
      justifyContent:'flex-end',
      paddingHorizontal:20,
      marginBottom:20
  },
})