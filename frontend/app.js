import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login.jsx';
import Tabs from './navigation/BottomTab.jsx';
import Register from './components/Register.jsx';

const AppNavigator = createStackNavigator(
  {
    Home: Tabs,
    Login: Login,
    Register: Register,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);