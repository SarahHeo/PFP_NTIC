import { StyleSheet } from 'react-native';
import button from './button';
import variables from '../utils/variables';

var test = {};

// so we only need to call this file and all styles will be in it
var mainStyle = {
    ...button
};

export default mainStyle;