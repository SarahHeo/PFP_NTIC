import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { View, Text, Image} from "react-native";
import Home from "../screens/Home.jsx";
import Favorites from "../screens/Favorites.jsx";
import Settings from "../screens/Settings.jsx";
import CustomChoice from "../screens/CustomChoice.jsx"

import style from '../styles/components/navBar.jsx';
import globalStyle from '../styles/components/global.jsx';
import Users from '../screens/Users.jsx';

const Tab = createBottomTabNavigator();

function Tabs() {
    return(
            <Tab.Navigator initialRouteName={"Users"}
                           screenOptions={{ tabBarActiveTintColor: globalStyle.color.pink,
                                            tabBarInactiveTintColor: globalStyle.color.inactive,
                                            tabBarLabelStyle: style.label,
                                            tabBarLabelPosition: "below-icon",
                                            tabBarStyle: style.bar,
                                            headerShown: false
                                            /*tabBarItemStyle: {}*/}}>
                <Tab.Screen name="Home"
                            component={Home}
                            options={{
                                tabBarLabel: "ACCUEIL",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/HomeIcon.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                ),
                                unmountOnBlur: true
                            }}
                />
                
                <Tab.Screen name="Favorites"
                            component={Favorites}
                            options={{
                                tabBarLabel: "FAVORIS",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/fav.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                ),
                                unmountOnBlur: true
                            }}
                />

                <Tab.Screen name="CustomPictograms"
                            component={CustomChoice}
                            options={{
                                tabBarLabel: "PERS.",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/Custom.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                )
                            }}
                />

                <Tab.Screen name="Users"
                            component={Users}
                            options={{
                                tabBarLabel: "UTILISATEURS",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/user.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                ),
                                unmountOnBlur: true
                            }}
                />

                <Tab.Screen name="Settings"
                            component={Settings}
                            options={{
                                tabBarLabel: "RÉGLAGES",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/Settings.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                )
                            }}
                />
            </Tab.Navigator>
    )
};


export default Tabs;