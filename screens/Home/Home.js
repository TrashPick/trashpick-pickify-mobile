import React from 'react';
import { View, Text, StyleSheet,ImageBackground,StatusBar,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,Platform,FlatList } from 'react-native'
import {  Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Header from '../../components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar'


function Home({navigation}){
    const  pickups = [
        {id:1,date:"Wed, 25 May",company:"Coliba Ghana",category:"Plastics"},
        {id:2,date:"Mon, 14 April",company:"Twelve Baskets Service",category:"Plastics"},
        {id:3,date:"Fri, 4 April",company:"GP waste Ltd",category:"Plastics"},
        {id:4,date:"Thurs, 29 March",company:"Polytex Ind.Ltd",category:"Plastics"},
        {id:5,date:"Mon, 20 March",company:"3G plastic limited company",category:"Plastics"},
        {id:6,date:"Sat, 6 Feb",company:"Zoom Lion Int Com",category:"Plastics"},
        {id:7,date:"Sun, 4 Feb",company:"Super paper product co.Ltd",category:"Plastics"},
        {id:8,date:"Fri, 4 Jan",company:"Geocrest co.Ltd",category:"Plastics"},
        {id:9,date:"Fri, 2 Jan",company:"Fearless co.Ltd",category:"Plastics"},
        {id:10,date:"Fri, 1 Jan",company:"Glocost co.Ltd",category:"Plastics"},
    ]
    const ListItem = (props)=>{
        return(
            <View style={{flexDirection:'column',paddingVertical:10}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.company}>{props.company}</Text>
                        <View style={{flexDirection:'row',paddingVertical:2}}>
                            <Text style={styles.category}>{props.category}</Text>
                            <Text style={styles.category}>.</Text>
                            <Text style={styles.date}>{props.date}</Text>
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="dots-horizontal" size={20} color={Colors.grey} />
                    </View>
                </View>
            </View>
        )
    }
    return(
       <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="light-content" backgroundColor={Platform === 'ios' ?"green":"green"}/>
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:15}}>
                                {Platform.OS === "ios" ?
                                <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                                    <View style={{borderRadius:40}}>
                                        <UserAvatar size={45} name="Kwame Agyenim" bgColor={Colors.white} textColor={Colors.green} />
                                    </View> 
                                </TouchableOpacity>
                                :
                                <TouchableNativeFeedback onPress={()=>{navigation.openDrawer()}} >
                                    <View style={{borderRadius:40}}>
                                        <UserAvatar size={45} name="Kwame Agyenim " bgColor={Colors.green} />
                                    </View> 
                                </TouchableNativeFeedback>}
                                <View style={{paddingHorizontal:10}}>
                                <Text style={styles.greeting}>Hello, Kwame!</Text>
                                <Text style={styles.msg}>Have you taken out trash today?</Text>
                                </View>
                            </View>
                    </View>
                <View style={{padding:20}}>
                    <Text style={styles.pickup}>PICKUP HISTORY</Text>
                    <FlatList 
                        data={pickups}
                        keyExtractor={ item => item.id.toString()}
                        renderItem={({item})=>(
                            <ListItem company={item.company} category={item.category} date={item.date}/>
                        )}
                    />
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                </View>
            </View>
       </SafeAreaView>
)
}
Home['navigationOptions']={
    
}
export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerContainer:{
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        padding:20,
        backgroundColor:Colors.green
    },
    menu:{
        backgroundColor:'white',
        padding:10,
        borderRadius:40,
        elevation:20,
    },
    heading:{
        fontFamily:'Bold',
        fontSize:Fonts.h1,
        color:Colors.green,
        textAlign:'center',
        justifyContent: 'center',
    },
    greeting:{
        fontFamily:'Bold',
        fontSize:Fonts.h1,
        color:"white"
    },
    msg:{
        fontFamily:'Medium',
        fontSize:Fonts.t3,
        paddingVertical:5,
        color:Colors.white
    },
    pickup:{
        fontFamily:'Bold',
        fontSize:Fonts.t2,
        paddingVertical:5,
        color:Colors.textColor
    },
    company:{
        fontFamily:'Medium',
        fontSize:15,
        color:Colors.black
    },
    category:{
        fontFamily:'Medium',
        fontSize:Fonts.t3,
        color:Colors.grey
    },
    date:{
        fontFamily:'Medium',
        fontSize:Fonts.t3,
        color:Colors.grey,
        marginLeft:10
    }
})