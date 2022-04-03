import {createAppContainer} from "react-navigation";

import { NavigationContainer } from '@react-navigation/native';
import RegistrationForm from "../components/RegistrationForm";
import ConfirmationScreen from "../components/ConfirmationScreen";
import HomeScreen from "../components/HomeScreen";
import Favorites from "../components/Favorites";
import createStackNavigator from "react-native-screens/createNativeStackNavigator";

const SearchStackNavigator = createStackNavigator({
    RegistrationForm: {
        screen: RegistrationForm,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        }
    },
    ConfirmationScreen: {
        screen: ConfirmationScreen,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        },
    }
})

export default createAppContainer(SearchStackNavigator);