import React, {Component} from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity,StyleSheet,FlatList,Dimensions} from 'react-native';


const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

 class SideMenu extends Component {
    render() {
        return (
            <View style={{justifyContent:"center",alignItems:"center"}}>
                <Image source={require('../images/logoicon.png')}
                style={{height:14*vh,width:34*vw,resizeMode:"contain"}} />

                <Text style={{fontSize:3.5*vh}}> MytuitionWala.com </Text>
                <Text style={{fontSize:3.5*vh}}> Subscribe Now</Text>

            </View> 
        )
    }
}
export default SideMenu;