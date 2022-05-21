import { StyleSheet } from 'react-native';
import variables from '../utils/variables';

export default StyleSheet.create({

    mainContainer: {
        //flex: 1/9,
        margin: 10,
        height: 150,
        width: 150,
        minWidth: 150
    },

    image: {
        borderColor: variables.color.yellow,
        borderWidth: 4
    }
    
})