import React from 'react';
import { StyleSheet, Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import LogIn from './screens/Login.jsx';
import MainApp from './components/MainApp.jsx';
import Register from './screens/Register.jsx';


function App() {
    const Stack = createStackNavigator();
    return (
        <SafeAreaProvider style={{
                flex: 1,
                backgroundColor: "white",
                paddingTop: Platform.OS === "android" ? 25 : 0
              
        }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"LogIn"} screenOptions={{ headerShown: false, gestureEnabled: false}}>
                    <Stack.Screen name="LogIn" component={LogIn}/>
                    <Stack.Screen name="MainApp" component={MainApp}/>
                    <Stack.Screen name="Register" component={Register}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;