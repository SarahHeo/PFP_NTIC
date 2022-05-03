import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { Camera } from 'expo-camera';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import Custom1 from './Custom1.jsx';
import Custom2 from './Custom2.jsx';
import Custom3 from './Custom3.jsx';
import CustomChoice from './CustomChoice.jsx';

function CustomPictogram2({navigation}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={"CustomChoice"}>
            <Stack.Screen name="CustomChoice" component={CustomChoice} options={{headerShown: false}}/>
            <Stack.Screen name="Custom1" component={Custom1}/>
            <Stack.Screen name="Custom2" component={Custom2}/>
            <Stack.Screen name="Custom3" component={Custom3}/>
        </Stack.Navigator>
    );
}

export default CustomPictogram2;