import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login.jsx';
import Tabs from './navigations/BottomTab.jsx';
import Register from './screens/Register.jsx';

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