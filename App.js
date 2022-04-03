/*
import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import Tabs from "./Navigation/BottomTab";
import Navigation from "./Navigation/Navigation";
import Authentication from "./Components/AuthenticationForm";


export default class App extends React.Component {
    render() {
        return (
            // Navigation avec barre de navigation inférieur pour naviguer entre les pages sans la partie inscription
            // (fichier BottomTab.js)
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
            //<Authentication/>
            // Navigation avec inscription mais sans barre de navigation inférieur (fichier navigation.js)
            //<Navigation/>
        );
    }
}
*/

/*import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './Components/LoginScreen';
import HomeScreen from './Components/HomeScreen';
import RegisterScreen from './Components/RegisterScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App();