import React from 'react'
import { View, Text ,Button} from 'react-native'

const SettingScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:35}}>SettingScreen</Text>
            <Button
            title="Go to HomeScreen"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default SettingScreen
