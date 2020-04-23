import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Pages/HomeScreen';
import SettingsScreen from './src/Pages/SettingScreen';


const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerTitle:'MytuitionWala',
                 headerTitleAlign:"center",
                 headerStyle: { backgroundColor: 'orange' },
                 headerTintColor: 'white', }} />

        <Stack.Screen name="Settings" component={SettingsScreen} 
         options={{headerTitle:'Subscribe Now',
         headerTitleAlign:"center",
         headerStyle: { backgroundColor: 'orange' },
         headerTintColor: 'white', }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;