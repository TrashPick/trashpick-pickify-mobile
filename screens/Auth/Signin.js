import React,{useState} from 'react'
import { View,StyleSheet,Text,TouchableNativeFeedback,SafeAreaView,KeyboardAvoidingView,Plaform,TouchableOpacity } from 'react-native'
import AuthContext from '../Auth/AuthContext'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Button from '../../components/Button'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import {AntDesign} from '@expo/vector-icons'



export default function Signin({navigation}){
    const [email,setEmail] = useState("");
    const [passowrd,setPassword] = useState("");
    
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
    
    const emailChange = (target)=>{
    setEmail(target.nativeEvent.text)
    }
    const passwordChange = (target)=>{
      setPassword(target.nativeEvent.text)
      }
    return(
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
         <Header leftAction={renderBackBtn()} title="Login"  type="auth"/>
         <KeyboardAvoidingView
						style={{ flex: 1, justifyContent: "center" }}
						behavior={Platform.OS === "android" ? "height" : "padding"}
						keyboardVerticalOffset={10}
						>
            <View style={{justifyContent:'center',flex:1,paddingHorizontal:10,paddingVertical:40}}>
              <View style={styles.emailContainer}>
                <TextInput input="email" placeholder="E-mail" onChange={value =>{emailChange(value)}}/>
              </View>
              <View style={styles.passwordContainer}>
                <TextInput input="password" placeholder="Password" onChange={value =>{passwordChange(value)}}/>
              </View>
              <View style={{alignItems:'flex-start',flexDirection:'row',alignItems:'center',paddingLeft:10,justifyContent:'space-between',paddingVertical:10}}>
                 <TouchableOpacity activeOpacity={0.5} style={{padding:10}} onPress={()=>{navigation.navigate("Forgot")}}>
                     <Text style={styles.more}>Forgot password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} style={{padding:10}} onPress={()=>{navigation.navigate("Signup")}}>
                     <Text style={[styles.more,{color:Colors.green}]}>Sign up</Text>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.btnContainer}>
               <Button type="signup" onClick={()=>{navigation.navigate("Main")}} title="Sign In"/>
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
  more:{
    fontFamily:"Medium",
    fontSize:Fonts.t2,
    textAlign:'center',
    letterSpacing:-0.2,
    color:Colors.grey,
  }
})