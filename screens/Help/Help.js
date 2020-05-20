import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,TouchableNativeFeedback   } from 'react-native'
import Header from '../../components/Header'
import { AntDesign} from '@expo/vector-icons'
import Colors from '../../constants/Colors'
 function Help(){
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
       <SafeAreaView>
        <Header leftAction={renderBackBtn()} title="Settings" type="App" />
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Help</Text>
                </View>
             </View>
       </SafeAreaView>
    )
}
export default Help;

const styles = StyleSheet.create({
container:{
    flex:1
}
})