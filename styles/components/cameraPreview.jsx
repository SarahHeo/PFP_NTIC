import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        width:'100%'
    },
    image: {
        flex:0.8
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
    icon: {
        width: '100%',
        height: '100%',
    }
});