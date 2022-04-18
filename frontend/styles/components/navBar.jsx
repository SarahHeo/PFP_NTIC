import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import variables from '../utils/variables';

export default StyleSheet.create({

    label: {
        fontSize: 20
    },

    icon: {
        width: 50,
        height: 50,
        margin: 50,
        marginTop: 50
        //resizeMode: 'contain'
    },

    bar: {
        position: 'absolute',
        border: "3px solid purple",
        bottom: 10,
        left: 20,
        right: 20,
        height: 80,
        backgroundColor: variables.color.light2,
        borderRadius: 60,
        borderColor: variables.color.dark1,
        borderTopColor: variables.color.dark1,
        borderWidth: 2,
        borderTopWidth: 2,

        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10
    }
})