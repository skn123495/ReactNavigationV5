import React from 'react'
import { View, Text ,Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize:35}}>HomScreen</Text>
                <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Settings')}
                />
            </View>
    )
}

export default HomeScreen
