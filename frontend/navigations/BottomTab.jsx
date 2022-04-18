import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import { View, Text, Image} from "react-native";
import Home from "../screens/Home.jsx";
import Favorites from "../screens/Favorites.jsx";
import Settings from "../screens/Settings.jsx";
import CustomPictogram from "../screens/CustomPictogram.jsx";
import styles from '../styles/screens/tabs.jsx';

const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <NavigationContainer>
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
                    component={Home}
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
                <Tab.Screen name="Favorites"
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
                <Tab.Screen name="CustomPictograms"
                    component={CustomPictogram}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent:'center', width: 100}}>
                                <Image
                                    source={require('../images/Custom.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 55,
                                        height: 55,
                                        tintColor: focused ? '#F0B0D6' : '#5e5e5e',
                                    }}
                                />
                                <Text style={{color: focused ? '#F0B0D6' : '#5e5e5e', fontSize: 18}}>
                                    PERS.
                                </Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="Settings"
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
        </NavigationContainer>
    )
};


export default Tabs;