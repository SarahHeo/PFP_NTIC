import { StyleSheet } from 'react-native';

const button = {
    alignItems:'center',
    alignSelf: 'center',
    borderRadius: 30,
    margin: 10,
    paddingRight: 15,
    paddingLeft: 15,
}

export default StyleSheet.create({
    main_container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#2a9d8F',
    },
    form:{
        marginBottom: 20   
    },
    buttonsContainer: {
        margin: 50,
        alignItems:'center',
    },
    signinButton: {
        ...button,
        backgroundColor: '#1675FF',
    },
    userButton: {
        ...button,
        backgroundColor: '#1675FF',
    },
    buttonText: {
        fontSize: 25,
        padding: 10,
        color: 'white',
    }
});