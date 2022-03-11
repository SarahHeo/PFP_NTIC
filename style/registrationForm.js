import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        fontFamily: 'Roboto',
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    textinputContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 15,
        borderLeftWidth: 1,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    litleTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    textinput: {
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
        height: 40,
        backgroundColor: '#e0e0e0',
        borderColor: '#000000',
        borderWidth: 0.8,
        borderRadius: 20,
        elevation: 5,
        fontSize: 20,
    },
    buttonContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'

    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 20,
        height: 40,
        width: 150,
        elevation: 5,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})