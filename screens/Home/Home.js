import React from 'react';
import { View, Text, StyleSheet,ImageBackground,StatusBar,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,Platform,FlatList } from 'react-native'
import {  Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import { data } from '../../constants/Pickups'
import Header from '../../components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar'
import ListItem from '../../components/Home/PickupListItem.js'


function Home({navigation}){
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
                        data={data}
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
   
   
})