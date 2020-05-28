import React,{useState} from 'react'
import { View,StyleSheet,Text,TouchableNativeFeedback,SafeAreaView,KeyboardAvoidingView,Plaform,TouchableOpacity,StatusBar } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Button from '../../components/Button'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import {AntDesign} from '@expo/vector-icons'


export default function Verification({navigation}){
  const [number,setNumber] = useState("");
  const [ code ,setCode] = useState("+233")
  const numberChange = (target)=>{
    setNumber(target.nativeEvent.text)
      }
      const codeChange = (target)=>{
        setCode(target.nativeEvent.text)
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
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
            <Header leftAction={renderBackBtn()} title="Enter Phone number"  type="auth"/>
            <StatusBar barStyle="light-content" backgroundColor="white"/>
            <KeyboardAvoidingView
						style={{ flex: 1, justifyContent: "center" }}
						behavior={Platform.OS === "android" ? "height" : "padding"}
						keyboardVerticalOffset={10}
						>
            <View style={styles.phoneNumber}>
              <View style={styles.codeContainer}>
                 <TextInput input="code" placeholder="" onChange={value =>{codeChange(value)}} value={code}/>
              </View>
              <View style={styles.phoneContainer}>
                 <TextInput input="number" placeholder="Phone Number" onChange={value =>{numberChange(value)}}/>
              </View>
            </View>
              <View style={styles.btnContainer}>
                  <Button type="signup" onClick={()=>{navigation.navigate("Otp")}} title="Continue"/>
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
    phoneNumber:{
      flexDirection:'row',
      flex:1,
      alignItems: 'center',
      paddingHorizontal:10
    },
    codeContainer:{
      justifyContent:'center',
      flex:1
    },
    phoneContainer:{
      justifyContent:'center',
      flex:4
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
  },
 
})