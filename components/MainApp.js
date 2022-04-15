import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "../navigation/BottomTab";

import globalStyle from '../style/components/global.js';

function MainApp() {
    return (
       /* <View style={globalStyle.body}>*/
            //<View style={globalStyle.mainContainer}>
                <NavigationContainer>
                    <Tabs/>
                </NavigationContainer>
            //</View>
        /*</View>*/
    );
}

export default MainApp;