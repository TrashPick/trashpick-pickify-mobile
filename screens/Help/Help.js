import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,StatusBar   } from 'react-native'
import Header from '../../components/Header'
import { AntDesign} from '@expo/vector-icons'
import Colors from '../../constants/Colors'
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
        <Header leftAction={renderBackBtn()} title="Help" type="App" />
        <StatusBar barStyle="light-content" backgroundColor="white"/>
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