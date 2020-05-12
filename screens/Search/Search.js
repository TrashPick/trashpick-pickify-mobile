import React from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity,ScrollView,TouchableNativeFeedback,Platform } from 'react-native'
import Colors from '../../constants/Colors';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'

class Search extends React.Component{
    state = {
        data:[
            {
                id:1,
                text:"Try-on makeup products",
                icon:"tag"
            },
            {
                id:2,
                text:"Make perfect selfies or stories",
                icon:"food-croissant"
            },
            {
                id:3,
                text:"Get personalized beauty recommendations",
                icon:"symfony"
            },
            {
                id:4,
                text:"Just for fun",
                icon:"food-fork-drink"
            },
            {
                id:5,
                text:"Get inspired by makeup ideas",
                icon:"steam"
            },
            {
                id:6,
                text:"Choose & Buy makeup products",
                icon:"food-variant"
            },
        ]
    }


    render(){
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={{}}>
                    <View style={{flexDirection:'column',paddingHorizontal:60}}>
                        <Text style={{fontFamily:'Bold',fontSize:19,paddingVertical:2,color:Colors.textColor}}>What brings you to VOIR?</Text>
                        <Text style={{fontFamily:'Light',fontSize:12,color:'grey',paddingVertical:1}}>This will help us recomment the right content for you</Text>
                    </View>
            </View>
            
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=>(
                        <View style={{paddingHorizontal:30}}>
                                <View style={styles.content}>
                                         {Platform === 'ios' 
                                         ?
                                         <TouchableOpacity>
                                           <View style={{backgroundColor:Colors.placeholderbackground,paddingHorizontal:13,borderRadius:10}}>
                                           <View style={{flexDirection:'row',alignItems:'center',paddingVertical:21,paddingHorizontal:5,}}>
                                                <View style={{paddingRight:10,}}>
                                                   <MaterialCommunityIcons name={item.icon} size={30} color={Colors.pink}/>
                                                </View>
                                                <View >
                                                     <Text style={styles.text}>{item.text}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        </TouchableOpacity>
                                         :
                                         <TouchableNativeFeedback>
                                           <View style={{backgroundColor:Colors.placeholderbackground,paddingHorizontal:13,borderRadius:10}}>
                                           <View style={{flexDirection:'row',alignItems:'center',paddingVertical:21,paddingHorizontal:5,}}>
                                                <View style={{paddingRight:10,}}>
                                                   <MaterialCommunityIcons name={item.icon} size={30} color={Colors.pink}/>
                                                </View>
                                                <View >
                                                     <Text style={styles.text}>{item.text}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        </TouchableNativeFeedback>
                                         }
                                </View>
                        </View>
                    )}
                />
            </View>
            <View style={{paddingHorizontal:50,paddingVertical:5}}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                    <View style={{}}>
                        <Text style={styles.btnText}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
         </View>
         </ScrollView>
        )
    }
}
export default Search;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
    },
    content:{
        paddingVertical:4,
        paddingHorizontal:25,
        
    },
    text:{
        fontFamily:'Bold',
        fontSize:12,
        color:'grey',
        textAlign:'left' 
    },
    btn:{
        backgroundColor:Colors.pink,
        padding:10,
        borderRadius:10
    },
    btnText:{
        fontFamily:'Bold',
        fontSize:16,
        color:'white',
        textAlign:'center'
       
    }
})