import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    top_container: {
        flex: 0.15,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    bot_container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 110
        //borderColor: '#FFFFFF',
        //borderWidth: 2
    },
    searchBar: {
        flex: 0.8,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-start',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 60,
    },
    selectedPictos: {
        flex : 0.07,
        height: 70,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 120,
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
   
    
    favoritePictosContainer: {
        flex: 0.11,
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 70
    },
    favoritePictos: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 70
    },
    pictos_container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 15,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 30
    },
    pressIcone: {
        flex: 1,
        marginTop: 230,
        marginLeft: 300,
        width: '45%',
        height: '45%',
        opacity: 0.8,
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    test: {
        resizeMode: 'contain',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200
    }
});
