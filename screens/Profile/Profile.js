import React from 'react'
import { View,StyleSheet,Text,SafeAreaView,TouchableOpacity,TouchableNativeFeedback } from 'react-native'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import { AntDesign,Entypo} from '@expo/vector-icons'
import Fonts from '../../constants/Fonts'
function Profile({navigation}){
    const renderBackBtn = ()=> {
        return (
          <View>
            {Platform.OS === 'ios' ?
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.openDrawer()}>
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
          <Header  title="Profile" type="auth" />
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Text style={styles.text}>Name</Text>
                    <Entypo name="chevron-small-right" size={24}  color={Colors.black}/>
                </View>
                <View style={styles.profile}>
                    <Text style={styles.text}>Phone Number</Text>
                    <Entypo name="chevron-small-right" size={24} color={Colors.black} />
                </View>
                <View style={styles.profile}>
                    <Text style={styles.text}>Email</Text>
                    <Entypo name="chevron-small-right" size={24}  color={Colors.black}/>
                </View>
            </View>
       </SafeAreaView>
    )
}
export default Profile
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
      padding:40,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    text:{
      fontFamily:"Medium",
      fontSize:Fonts.t2,
      color:Colors.black
    }
})