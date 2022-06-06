import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 20,
        marginBottom: 100
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    buttonContainer: {
        marginVertical: 10
    },

    userItem: {
        marginVertical: 10,
        flexDirection: 'row'
    },

    userButton:{
        flex: 8,
        padding: 10,
        borderRadius: 35,
        marginHorizontal: 10,
        backgroundColor: '#34c3eb',
        alignItems:'center',
        elevation: 10
    },

    userItem: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 35,
        marginVertical: 10,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

});