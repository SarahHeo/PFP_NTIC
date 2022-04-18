import { StyleSheet } from 'react-native';
import globalStyle from '../components/global.jsx';
import variables from '../utils/variables.jsx';

const style = StyleSheet.create({

    container: {
        flex: 1,
        //flexDirection: 'column',
        marginBottom: 110,
        overflow: "auto"
    },

    sentenceContainer: {
        borderColor: variables.color.veryLight,
        borderWidth: 2,
        borderRadius: 60,
        height: 120,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
    },

    deleteButton: { 
        height: "100%", 
        width: 100
    }
})

export default style;
