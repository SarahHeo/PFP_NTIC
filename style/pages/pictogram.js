import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main_container : {
        flex : 0.2,
        margin : 10,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 120
    },
    images : {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 200
    },
    disabled_images : {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 200,
        opacity: 0.5
    }
})