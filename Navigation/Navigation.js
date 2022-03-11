import {createAppContainer} from "react-navigation";

import { NavigationContainer } from '@react-navigation/native';
import RegistrationForm from "../components/Registration_Form";
import ConfirmationScreen from "../Components/ConfirmationScreen";
import HomeScreen from "../Components/HomeScreen";
import Favorites from "../Components/Favorites";
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