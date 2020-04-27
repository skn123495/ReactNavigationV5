import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/Pages/HomeScreen';
import SettingsScreen from './src/Pages/SettingScreen';
import SideMenu from './src/Pages/SideMenu';
import ProflieScreen from './src/Pages/ProfileScreen';
import SupportScreen from './src/Pages/SupportScreen';


const Drawer = createDrawerNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <SideMenu {...props} /> }>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Profile" component={ProflieScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;

