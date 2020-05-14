import React,{useState} from 'react'
import { View,StyleSheet,Text,TouchableNativeFeedback,SafeAreaView,KeyboardAvoidingView,Plaform,TouchableOpacity  } from 'react-native'
import AuthContext from '../Auth/AuthContext'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Button from '../../components/Button'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import {AntDesign} from '@expo/vector-icons'

export default function ForgotPassword({navigation}){
    const [email,setEmail] = useState("");
    const [passowrd,setPassword] = useState("");
    
    const emailChange = (target)=>{
        setEmail(target.nativeEvent.text)
        }
    const passwordChange = (target)=>{
          setPassword(target.nativeEvent.text)
          }
    const renderBackBtn = ()=> {
        return (
          <View>
            {Platform.OS === 'ios' ?
            <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.pop()}>
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="black" size={18} />
            </View>
          </TouchableOpacity>
          :
          <TouchableNativeFeedback onPress={() =>navigation.pop()} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} useForeground={true} >
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="black" size={18} />
            </View>
          </TouchableNativeFeedback>
            }
          </View>
        );
  }
  const passwordContainer = ()=>{
      return(
        <View style={styles.passwordContainer}>
            <TextInput input="password" placeholder="Password" onChange={value =>{passwordChange(value)}}/>
        </View>
      )
  }
  
    return(
       <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
            <Header leftAction={renderBackBtn()} title="Forgot Password" />
            <KeyboardAvoidingView
						style={{ flex: 1, justifyContent: "center" }}
						behavior={Platform.OS === "android" ? "height" : "padding"}
						keyboardVerticalOffset={10}
						>
            <View style={{justifyContent:'center',flex:1,paddingHorizontal:10,paddingVertical:40}}>
              <View style={styles.emailContainer}>
                <TextInput input="email" placeholder="E-mail" onChange={value =>{emailChange(value)}}/>
              </View>
            </View>
            <View style={styles.btnContainer}>
               <Button type="signup" onClick={()=>{navigation.navigate("Send code")}} title="Send code"/>
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
    emailContainer:{
      paddingVertical:20
    },
    passwordContainer:{
    },
    btnContainer:{
      flex:1,
      justifyContent:'flex-end',
      paddingHorizontal:20,
      marginBottom:40
  },
  
})