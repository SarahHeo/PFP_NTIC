import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import Tabs from "./Navigation/BottomTab";
import Navigation from "./Navigation/Navigation";


export default class App extends React.Component {
    render() {
        return (
            // Navigation avec barre de navigation inférieur pour naviguer entre les pages sans la partie inscription
            // (fichier BottomTab.js)
            <NavigationContainer>
                    <Tabs/>
            </NavigationContainer>

            // Navigation avec inscription mais sans barre de navigation inférieur (fichier navigation.js)
            // <Navigation/>
        );
    }
}

