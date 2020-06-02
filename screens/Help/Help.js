import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,StatusBar   } from 'react-native'
import Header from '../../components/Header'
import { AntDesign,SimpleLineIcons} from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts';
 function Help({navigation}){
    const renderBackBtn = ()=> {
        return (
          <View>
            {Platform.OS === 'ios' ?
            <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.openDrawer()}>
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="black" size={18} />
            </View>
          </TouchableOpacity>
          :
          <TouchableNativeFeedback onPress={() =>navigation.openDrawer()} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} useForeground={true} >
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
        <Header leftAction={renderBackBtn()} title="Help & Feedback" type="App" />
        <StatusBar barStyle="light-content" backgroundColor="white"/>
            <View style={styles.container}>
              <View style={styles.header}>
                 <Text style={{fontFamily:'Medium',fontSize:16,color:Colors.textColor}}>Feedback</Text>
              </View>
               <View style={styles.section}>
                  <View style={styles.content}>
                        <SimpleLineIcons name="emotsmile" size={20} color={Colors.grey}/>
                        <View style={styles.contentContainer}>
                          <Text style={styles.text}>Tell us What you like</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                      <SimpleLineIcons name="feed" size={16} color={Colors.grey} />
                        <View style={styles.contentContainer}>
                          <Text style={styles.text}>Tell us What Can Be Better</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                      <SimpleLineIcons name="like" size={20} color={Colors.grey} />
                        <View style={styles.contentContainer}>
                          <Text style={styles.text}>Suggest  a feature</Text>
                        </View>
                    </View>
               </View>
               <View  style={styles.section2}>
                   <View style={styles.content2}>
                       <SimpleLineIcons name="info" size={20} color={Colors.grey} />
                            <View style={styles.contentContainer}>
                              <Text style={styles.text}>Help and Support</Text>
                            </View>
                        </View>
               </View>
               <View  style={styles.section2}>
                   <View style={styles.content2}>
                       <SimpleLineIcons name="star" size={20}color={Colors.grey}  />
                            <View style={styles.contentContainer}>
                              <Text style={styles.text}>Rate App</Text>
                            </View>
                        </View>
               </View>
             </View>
       </SafeAreaView>
    )
}
export default Help;

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:Colors.screenbackground
},
header:{
  padding:20,
},
section:{
  backgroundColor:Colors.white
},
section2:{
  paddingVertical:30
},
content:{
  flexDirection:'row',
  alignItems:'center',
  paddingHorizontal:20,
  borderBottomColor:Colors.textColor,
  borderBottomWidth:0.2,
  borderTopColor:Colors.textColor,
  borderTopWidth:0.2,
  padding:12,
},
content2:{
  flexDirection:'row',
  alignItems:'center',
  paddingHorizontal:20,
  borderBottomColor:Colors.textColor,
  borderBottomWidth:0.2,
  borderTopColor:Colors.textColor,
  borderTopWidth:0.2,
  padding:12,
  backgroundColor:Colors.white,

},
contentContainer:{
    paddingLeft:20,
},
text:{
  textAlign:'center',
  fontFamily:'Medium',
  fontSize:Fonts.t3,
  color:Colors.black
}
})