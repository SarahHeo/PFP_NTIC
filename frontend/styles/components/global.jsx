import { StyleSheet } from 'react-native';
import button from './button.jsx';
import container from './container.jsx';
import variables from '../utils/variables';

var test = {};

// so we only need to call this file and all styles will be in it
var mainStyle = {
    ...button,
    ...container,
};

export default mainStyle;