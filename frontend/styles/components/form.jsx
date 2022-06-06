import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    main_container: {
        //margin: 20
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8
    },
    loginButton: {
        backgroundColor: '#F0B0D6',
        alignItems:'center',
        alignSelf: 'center',
        borderRadius: 30
    },
    buttonText: {
        fontSize: 25,
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15,
        color: 'white',
    }
});