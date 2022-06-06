import { StyleSheet } from 'react-native';

const button = {
    alignItems:'center',
    alignSelf: 'center',
    borderRadius: 30,
}

export default StyleSheet.create({
    container: {
        flex: 1
    },
    cameraContainer:{
        flexDirection:'row',
        height:'85%',
        justifyContent:'center'
    },
    camera: {
        height: '85%',
        width: '50%',
    },
    buttonsChoiceContainer: {
        margin: 30,
        alignItems:'center',
    },
    choiceButton: {
        ...button,
        width: '20%',
        margin: 5,
        backgroundColor: '#1675FF',
        width: '40%',
    },
    choiceButtonSelected: {
        ...button,
        width: '20%',
        margin: 5,
        backgroundColor: '#1675FF',
        width: '40%',
        opacity: 0.2
    },
    createButton: {
        ...button,
        backgroundColor: '#F0B0D6',
        width: '30%',
        margin: 10
    },
    buttonText: {
        fontSize: 25,
        padding: 8,
        color: 'white',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        opacity: 0.7,
        margin: 20,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    icon: {
        width: '100%',
        height: '100%',
    },
    field: {
        fontSize: 20,
        margin: 8,
        color: 'white',
        fontWeight: 'bold'
    },
    input_area: {
        borderWidth: 1,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 10
    }, 
    image: {
        width:'30%',
        height:'50%',
        alignSelf:'center'
    } 
});