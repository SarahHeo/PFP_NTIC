import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30,
        backgroundColor: '#2a9d8F',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 90,
        backgroundColor: '#2a9d8F',
        justifyContent: 'center',

    },
    phrase_container: {
        flex: 0.15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#2a9d8F',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 60,
        elevation: 10,
    }
})