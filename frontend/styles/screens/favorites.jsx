import { StyleSheet, Dimensions } from 'react-native';
import globalStyle from '../components/global.jsx';
import variables from '../utils/variables.jsx';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

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
        marginVertical: 10,
        paddingHorizontal: 25,
        //justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    buttonContainer: {
        flexDirection: 'row'
    },

    button: {
        height: screenHeight * 0.06,
        width:  screenHeight * 0.06,
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
