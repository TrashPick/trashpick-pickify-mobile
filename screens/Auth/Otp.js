import React from 'react'
import { View,StyleSheet,Text,TouchableNativeFeedback,SafeAreaView,KeyboardAvoidingView,Plaform,TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Button from '../../components/Button'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import {AntDesign} from '@expo/vector-icons'


export default function Otp(){
    const [code,setCode] = useState("");
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
            <Header leftAction={renderBackBtn()} title="Verify Code" />
            <KeyboardAvoidingView
						style={{ flex: 1, justifyContent: "center" }}
						behavior={Platform.OS === "android" ? "height" : "padding"}
						keyboardVerticalOffset={10}
						>
                <View style={{paddingVertical:10,justifyContent:'center',alignItems:'center',paddingHorizontal:50}}>
                      <Text style={{fontFamily:'Medium',fontSize:16,color:Colors.grey,textAlign:'center',lineHeight:25}}>Enter the code sent to (0500486323)</Text>
                  </View>
              <View style={styles.codeContainer}>
                <TextInput input="number" placeholder="Enter here" onChange={value =>{codeChange(value)}}/>
              </View>
                <View style={styles.btnContainer}>
                     <Button type="signup" onClick={()=>{navigation.navigate("Signup")}} title="Verify"/>
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
    codeContainer:{
      paddingVertical:20
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