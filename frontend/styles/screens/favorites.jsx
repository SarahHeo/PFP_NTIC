import { StyleSheet } from 'react-native';
import globalStyle from '../components/global.jsx';

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 90,
        backgroundColor: '#2a9d8F',
        justifyContent: 'center'
    },
    phrase_container: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#2a9d8F',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 60,
        elevation: 10
    },
    deleteButton: { 
        height: "100%", 
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
})

export default style;
