import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "../navigations/BottomTab.jsx";

import globalStyle from '../styles/components/global.jsx';

function MainApp() {
    return (
       /* <View style={globalStyle.body}>*/
            //<View style={globalStyle.mainContainer}>
                <Tabs/>
            //</View>
        /*</View>*/
    );
}

export default MainApp;