import React from 'react'
import { View,StyleSheet,Text,SafeAreaView,TouchableOpacity,TouchableNativeFeedback } from 'react-native'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import { AntDesign} from '@expo/vector-icons'
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
         <Header leftAction={renderBackBtn()} title="Profile" type="App" />
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Profile</Text>
                </View>
            </View>
       </SafeAreaView>
    )
}
export default Profile
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})