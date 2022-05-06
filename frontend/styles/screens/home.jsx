import { StyleSheet } from 'react-native';
import variables from '../utils/variables.jsx';

const style =  StyleSheet.create({
    
    /** Main containers **/
        topContainer: {
            flex: 0.2,
            flexDirection: 'row',
            minHeight: 100
        },
        
        botContainer: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 110,
            minHeight: 100
        },

    /** Top **/
        selectedPictoContainer: {
            flex: 0.8,
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'flex-start',
            alignItems: "center",
            borderColor: variables.color.veryLight,
            borderWidth: 2,
            borderRadius: 60,
            paddingLeft: 30,
            paddingRight: 30,
            padding: 10
        },

        buttonsContainer:{
            flex: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            minWidth: 150
        },

        favButtonContainer:{
            alignItems: 'center'
        },

        button: {
            //border: "1px solid black",
            flex: 0.33,
            margin: 5,
            height: "100%",
            maxHeight: 80
        },

        favButton: {
            margin: 5,
            height: 80,
            width: 80
        },

    /** Bot **/
        favPictoContainer: {
            flex: 0.11,
            //flexDirection: 'column',
            marginTop: 10,
            padding: 20,
            //justifyContent: 'center',
            alignItems: 'center',
            borderColor: variables.color.veryLight,
            borderWidth: 2,
            borderRadius: 50
        },

        pictoContainer: {
            flex: 1,
            justifyContent: 'center',
            marginTop: 10,
            marginLeft: 15,
            borderColor: variables.color.veryLight,
            borderWidth: 2,
            borderRadius: 30,
            padding: 15,
        },

        pictoList: {
            //flex: 1,
            justifyContent: 'space-evenly'
        },

    /* */

});

export default style;