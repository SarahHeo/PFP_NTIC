import { StyleSheet } from 'react-native';
import globalStyle from '../components/global.jsx';
import variables from '../utils/variables.jsx';

const style = StyleSheet.create({

    container: {
        flex: 1,
        //flexDirection: 'column',
        marginBottom: 110
    },

    sentenceContainer: {
        //flex: 1,
        borderColor: variables.color.veryLight,
        borderWidth: 2,
        borderRadius: 35,
        //minHeight: 120,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    button: {
        height: 65, 
        width: 65,
        marginLeft: 10
    },

    messageContainer: {
        marginTop: 50
    },

    message: {
        fontSize: 15,
        textAlign: "center"
    }
})

export default style;