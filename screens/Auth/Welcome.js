import React from 'react'
import { View,StyleSheet,Text,StatusBar,Image,ScrollView,SafeAreaView,TouchableNativeFeedback,TouchableOpacity} from 'react-native'
import AuthContext from '../Auth/AuthContext'
import Button from '../../components/Button'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Carousel from 'react-native-snap-carousel';
import Lottie from '../../components/Lottie'

export default class Welcome extends React.Component{
   state = {
       changeswipe: false,
       carouselItems:[
           {id:1,item:<Lottie lottie="wallet"/>},
           {id:2,item:<Lottie lottie="phone"/>},
           {id:3,item:<Lottie lottie="location"/>},
        ]
   }
   _renderItem = ()=>{
       return(
           <View>
                {/* <Lottie lottie="wallet"/> */}
           </View>
       )
   }
  render(){
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.carousel}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.carouselItems}
                    renderItem={this._renderItem}
                    sliderWidth={250}
                    itemWidth={250}
                />
            </View>
            <View style={{justifyContent:'flex-end',flex:1,}}>
                <Text style={styles.summary}>Welcome to Pickify 👋 </Text>
            </View>
           <View style={{flex:1,top:70}}>
                <View style={styles.btnContainer1}>
                    <Button type="signup" onClick={()=>{this.props.navigation.navigate('Signup')}} title="Sign Up"/>
                </View>
                <View style={styles.btnContainer2}>
                    <Button type="signin" onClick={()=>{this.props.navigation.navigate('Signin')}} title="Sign In"/>
                </View>
           </View>
            <View style={{justifyContent:'center',flex:1,flexDirection:'row',alignItems:'center',top:30}}>
                <TouchableOpacity activeOpacity={0.5} style={{padding:10}}>
                 <Text style={styles.help}>Terms & Conditions</Text>
                </TouchableOpacity>
                <Text style={styles.help}>||</Text>
                <TouchableOpacity activeOpacity={0.5} style={{padding:10}}>
                 <Text style={styles.help}>Privacy Services</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        alignItems:'center',
        flex:1,
        marginTop:20
    },
    skip:{
        fontFamily:"Medium",
        fontSize:Fonts.t1,
        textAlign:'right',
        letterSpacing:-0.2,
        color:Colors.black
    },
    header:{
        fontFamily:"Medium",
        fontSize:Fonts.h3,
        textAlign:'center',
        letterSpacing:-0.2,
        color:Colors.black
    },
    summary:{
        fontFamily:"Medium",
        fontSize:24,
        textAlign:'center',
        letterSpacing:-0.2,
        color:Colors.textHeader,
        paddingHorizontal:40
    },
    btnContainer1:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingVertical:20
    },
    btnContainer2:{
        flex:1,
        paddingHorizontal:20,
    },
    help:{
        fontFamily:"Medium",
        fontSize:Fonts.t2,
        textAlign:'center',
        letterSpacing:-0.2,
        color:Colors.textHeader,
    }
})
    {/* <ViewPager style={{flex:1}} initialPage={0}>
        <View key="1">
            <View style={{marginTop:30,marginEnd:20}}>
                <Text style={styles.skip}>Skip</Text>
            </View>
            <View style={styles.img}>
                <Image source={require("../../assets/images/welcome_cats.png")} style={{width:280,height:190, marginTop:40}} resizeMode="center"/>
            </View>
            <View style={{justifyContent:'flex-end',flex:1,marginBottom:-20}}>
                <Text style={styles.header}>Request</Text>
            </View>
            <View style={{justifyContent:'flex-end',flex:1,}}>
                <Text style={styles.summary}>Let’s keep our environments clean,keep them here, send to others</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button onClick={()=>{}} title="Next"/>
            </View>
        </View>
        <View key="2">
            <View  style={{marginTop:30,marginEnd:20}}>
                <Text style={styles.skip}>Skip</Text>
            </View>
            <View style={styles.img}>
                <Image source={require("../../assets/images/welcome_cats.png")} style={{width:280,height:190, marginTop:40}} resizeMode="center"/>
            </View>
            <View  style={{justifyContent:'flex-end',flex:1,marginBottom:-20}}>
                <Text style={styles.header}>Yeah</Text>
            </View>
            <View style={{justifyContent:'flex-end',flex:1,}}>
                <Text style={styles.summary}>Let’s keep our environments clean,keep them here, send to others</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button onClick={()=>{}} title="Next"/>
            </View>
        </View>
    </ViewPager> */}