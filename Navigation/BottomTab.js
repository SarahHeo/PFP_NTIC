import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from "react-native";
import HomeScreen from "../components/HomeScreen";
import Favorites from "../components/Favorites";
import Settings from "../components/Settings";
import Navigation from "./Navigation";
import {NavigationContainer} from "@react-navigation/native";

import styles from '../style/tabs.js';

const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    backgroundColor: '#2a9d8F',
                    borderRadius: 60,
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    height: 90,
                    ...styles.shadow
                }
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent:'center', width: 100}}>
                            <Image
                                source={require('../images/HomeIcon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 55,
                                    height: 55,
                                    tintColor: focused ? '#F0B0D6' : '#5e5e5e',
                                }}
                            />
                            <Text style={{color: focused ? '#F0B0D6' : '#5e5e5e', fontSize: 18}}>
                                ACCUEIL
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Favoris"
                        component={Favorites}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent:'center', width: 100}}>
                                    <Image
                                        source={require('../images/FavIcon2.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 55,
                                            height: 55,
                                            tintColor: focused ? '#F0B0D6' : '#5e5e5e',
                                        }}
                                    />
                                    <Text style={{color: focused ? '#F0B0D6' : '#5e5e5e', fontSize: 18}}>
                                        FAVORIS
                                    </Text>
                                </View>
                            )
                        }}/>
            <Tab.Screen name="Réglages"
                        component={Settings}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent:'center', width: 100}}>
                                    <Image
                                        source={require('../images/Settings.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 55,
                                            height: 55,
                                            tintColor: focused ? '#F0B0D6' : '#5e5e5e',
                                        }}
                                    />
                                    <Text style={{color: focused ? '#F0B0D6' : '#5e5e5e', fontSize: 18}}>
                                        REGLAGES
                                    </Text>
                                </View>
                            )
                        }}
            />
        </Tab.Navigator>
    )
};


export default Tabs;