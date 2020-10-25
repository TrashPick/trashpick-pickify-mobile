import React from 'react'
import Colors from '../../constants/Colors'
import { View, Text, StyleSheet,} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PickupListIem = (props) => {
    return (
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
export default PickupListIem
const styles = StyleSheet.create({
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
