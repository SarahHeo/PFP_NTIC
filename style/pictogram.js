import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main_container : {
        flex : 0.2,
        margin : 10,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    images : {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
    }
})