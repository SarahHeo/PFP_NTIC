import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
    container: {
        flex: 1,  
    },
    cameraContainer:{
        flex: 1,
        width: '100%'
    },
    camera: {
        height: '90%'  
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
        fontSize: 15,
        margin: 8,
    },
    input_area: {
        borderWidth: 1,
        padding: 8
    }, 
    image: {
        width:100,
        height:100,
        alignSelf:'center'
    }
});