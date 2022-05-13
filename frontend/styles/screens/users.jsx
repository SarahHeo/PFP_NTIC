import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 20,
        marginBottom: 100
    },
    listContainer:{
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
    pickerContainer: {
    }

});