import React from 'react'
import { View, Text ,Button,Dimensions} from 'react-native'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const HomeScreen = ({navigation}) => {
    return (
        <View >
            <View >
                <Icon name="menu"  style={[{fontSize:9*vw,marginVertical:1.8*vh,paddingLeft:5*vw,}]}
                onPress={() =>navigation.openDrawer('SideMenu')}/>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center',marginTop:20*vh }}>
                <Text style={{fontSize:35}}>HomScreen</Text>
                <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Settings')}
                />
            </View>
        </View>
    )
}

export default HomeScreen
