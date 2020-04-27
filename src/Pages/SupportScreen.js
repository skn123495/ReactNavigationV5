import React from 'react'
import { View, Text ,Button} from 'react-native'

const SupportScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:35}}>SupportScreen</Text>
            <Button
            title="Go to HomeScreen"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default SupportScreen;
