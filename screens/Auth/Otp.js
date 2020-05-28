import React,{useState} from 'react'
import { View,StyleSheet,Text,TouchableNativeFeedback,SafeAreaView,KeyboardAvoidingView,Plaform,TouchableOpacity,StatusBar } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Button from '../../components/Button'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import {AntDesign} from '@expo/vector-icons'
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell} from 'react-native-confirmation-code-field';


export default function Otp({navigation}){
  const CELL_COUNT = 5;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value,setValue,});
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
            <Header leftAction={renderBackBtn()} title="Confirmation Code"  type="auth"/>
            <StatusBar barStyle="light-content" backgroundColor="white"/>
            <KeyboardAvoidingView
						style={{ flex: 1, justifyContent: "center" }}
						behavior={Platform.OS === "android" ? "height" : "padding"}
						keyboardVerticalOffset={10}
						>
                 <View style={{paddingVertical:10,justifyContent:'center',alignItems:'center',paddingHorizontal:50,flex:1}}>
                      <Text style={{fontFamily:'Medium',fontSize:16,color:Colors.grey,textAlign:'center',lineHeight:25}}>Enter the 5- digits code sent to (0500486323)</Text>
                  </View>
                  <View style={{paddingHorizontal:30,justifyContent:'center',flex:1}}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    renderCell={({index, symbol, isFocused}) => (
                      <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    )}
                  />
              </View>
              <View style={{paddingVertical:10,justifyContent:'center',alignItems:'center',paddingHorizontal:50,flex:1,flexDirection:'row'}}>
                      <Text style={{fontFamily:'Medium',fontSize:16,color:Colors.grey,textAlign:'center',lineHeight:25}}>Didn't receive any code? </Text>
                      <TouchableOpacity activeOpacity={0.5} style={{padding:10}} onPress={()=>{}}>
                        <Text style={[styles.more,{color:Colors.green}]}>Resend</Text>
                      </TouchableOpacity>
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
  root: {
    flex: 1,
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFiledRoot: {
    marginTop: 20
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    ...Platform.select({
      ios: {
        borderBottomColor:Colors.otpColor,
        color:Colors.black
      },
      android: {
        borderBottomColor:Colors.otpColor,
        color:Colors.black
      }
    }),
    borderBottomColor:Colors.otpColor,
    textAlign: 'center',
    fontFamily:"Medium",
    color:Colors.black
  },
  focusCell: {
    ...Platform.select({
      ios: {
      backgroundColor:Colors.grey
      },
      android: {
        borderColor:Colors.green,
      }
    }),
  },
})