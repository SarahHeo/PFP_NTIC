import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import Tabs from "./navigation/BottomTab";
import Navigation from "./navigation/Navigation";
import globalStyle from './style/components/global.js';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from 'react-native';
import MainApp from "./components/MainApp.js";

export default class App extends React.Component {
    render() {
        return (
            // Navigation avec barre de navigation inférieur pour naviguer entre les pages sans la partie inscription
            // (fichier BottomTab.js)
            <MainApp/>

            // Navigation avec inscription mais sans barre de navigation inférieur (fichier navigation.js)
            //<Navigation/>
        );
    }
}

