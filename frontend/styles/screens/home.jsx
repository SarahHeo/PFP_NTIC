import { StyleSheet } from 'react-native';
import globalStyle from '../components/global.jsx';
import variables from '../utils/variables.jsx';

const style =  StyleSheet.create({
    
    /** Main containers **/
        topContainer: {
            flex: 0.20,
            flexDirection: 'row',
            minHeight: 50
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
            borderColor: variables.color.veryLight,
            borderWidth: 2,
            borderRadius: 60,
            paddingLeft: 30,
            paddingRight: 30,
            padding: 10
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
            padding: 15
        }
});

export default style;