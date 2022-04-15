import { StyleSheet } from 'react-native';
import button from './button';
import container from './container';
import text from './text';

var test = {};

// so we only need to call this file and all styles will be in it
var mainStyle = {
    ...button,
    ...container,
    ...text
};

export default mainStyle;