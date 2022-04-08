import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main_container : {
        flex : 0.07,
        margin : 2,
        height: 73,
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