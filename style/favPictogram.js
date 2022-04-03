import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main_container : {
        flex : 0.2,
        margin : 5,
        height: 110,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 120
    },
    images : {
        resizeMode: 'contain',
        width: '100%',
        height: 100,
        aspectRatio: 1,
        borderRadius: 200
    }
})