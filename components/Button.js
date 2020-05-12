import React from 'react'
import { View,StyleSheet,Text,TouchableWithoutFeedback,Animated,To } from 'react-native'
import Font from '../constants/Fonts'
import Colors from '../constants/Colors'
import Signin from '../screens/Auth/Signin'
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
          <TouchableWithoutFeedback onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}} >
                  <Animated.View  style={[styles.button,animationStyle]}>
                      <Text style={styles.text}>{this.props.title}</Text>
                  </Animated.View>
          </TouchableWithoutFeedback>
      )
       }else if(this.props.type === "signin"){
        return(
          <TouchableWithoutFeedback onPress={this.props.onClick}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}}>
                  <Animated.View  style={[styles.button2,animationStyle]}>
                      <Text style={styles.text2}>{this.props.title}</Text>
                  </Animated.View>
          </TouchableWithoutFeedback>
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
        fontSize:Font.h2,
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
  text2:{
      fontFamily:"Medium",
      fontSize:Font.h2,
      color:Colors.green,
      textAlign:'center'
  }

})