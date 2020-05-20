import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,TouchableNativeFeedback  } from 'react-native'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'
import { AntDesign} from '@expo/vector-icons'
function Settings({navigation}){
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
        <SafeAreaView style={{flex:1}}>
             <Header leftAction={renderBackBtn()} title="Settings" type="App" />
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{textAlign:'center',fontFamily:'Regular',fontSize:16}}>Settings</Text>
                </View>
            </View>
        </SafeAreaView>
)
}
export default Settings;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})