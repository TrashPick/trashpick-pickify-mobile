import React from 'react'
import { View,StyleSheet,Text,TouchableWithoutFeedback,Animated,Platform,TouchableOpacity } from 'react-native'
import Font from '../constants/Fonts'
import Colors from '../constants/Colors'
import Signin from '../screens/Auth/Signin'
import { Ionicons } from '@expo/vector-icons';
export default class  Button extends React.Component{
  constructor(props){
    super(props)
  }
  UNSAFE_componentWillMount(){
        this.animatedValue = new Animated.Value(1);
      }
      handlePressIn = ()=> {
        Animated.spring(this.animatedValue,{
          toValue:0.9
        }).start()
      }
      handlePressOut = ()=> {
        Animated.spring(this.animatedValue,{
          toValue:1,
          friction:20,
          tension:30,
        }).start()
      }
      
    render(){
        const animationStyle={
            transform:[{scale:this.animatedValue}]
          }
       if(this.props.type === "signup"){
        return(
        <View>
           {Platform.OS === 'ios' ?
            <TouchableOpacity activeOpacity={1} onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}} >
                <Animated.View  style={[styles.button,animationStyle]}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </Animated.View>
            </TouchableOpacity>
         :
          <TouchableWithoutFeedback onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}} >
                    <Animated.View  style={[styles.button,animationStyle]}>
                        <Text style={styles.text}>{this.props.title}</Text>
                    </Animated.View>
            </TouchableWithoutFeedback>
        }
        </View>
      )
       }else if(this.props.type === "signin"){
        return(
         <View>
           {Platform.OS === 'ios' ?
           <TouchableOpacity activeOpacity={1} onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}}>
                  <Animated.View  style={[styles.button2,animationStyle]}>
                      <Text style={styles.text2}>{this.props.title}</Text>
                  </Animated.View>
          </TouchableOpacity>
          :
          <TouchableWithoutFeedback onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}}>
                  <Animated.View  style={[styles.button2,animationStyle]}>
                      <Text style={styles.text2}>{this.props.title}</Text>
                  </Animated.View>
          </TouchableWithoutFeedback>
           }
         </View>
      )
       }else if(this.props.type === "request"){
        return(
         <View>
           {Platform.OS === 'ios' ?
           <TouchableOpacity activeOpacity={1} onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}}>
                  <Animated.View  style={[styles.request,animationStyle]}>
                      <Ionicons name="ios-add" size={24} color="white" />
                  </Animated.View>
          </TouchableOpacity>
          :
          <TouchableWithoutFeedback onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}}>
                  <Animated.View  style={[styles.request,animationStyle]}>
                       <Ionicons name="ios-add" size={24} color={this.props.focused ? "white" : "white"} />
                  </Animated.View>
          </TouchableWithoutFeedback>
           }
         </View>
      )
       }else if(this.props.type === "camera"){
        return(
         <View>
           {Platform.OS === 'ios' ?
           <TouchableOpacity activeOpacity={1} onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}}>
                  <Animated.View  style={animationStyle}>
                     {props.childern}
                  </Animated.View>
          </TouchableOpacity>
          :
          <TouchableWithoutFeedback onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}}>
                  <Animated.View  style={animationStyle}>
                  {props.childern}
                  </Animated.View>
          </TouchableWithoutFeedback>
           }
         </View>
      )
       }
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.green,
        elevation:1,
        borderRadius:5,
        padding:18,
        bottom:0
    },
    text:{
        fontFamily:"Medium",
        fontSize:Font.t2,
        color:"white",
        textAlign:'center'
    },
    button2:{
      backgroundColor:"white",
      borderColor:Colors.grey,
      borderWidth:0.7,
      borderRadius:5,
      padding:18,
      bottom:0
  },
  request:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.green,
        width:62,
        height:62,
        borderRadius: 36,
        borderWidth:3,
        borderColor:"white",
        position:'absolute',
        top:-50,
        left:-30,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
            },
            android: {
              elevation: 3,
            },           
}),
  },
  text2:{
      fontFamily:"Medium",
      fontSize:Font.t2,
      color:Colors.green,
      textAlign:'center'
  }

})