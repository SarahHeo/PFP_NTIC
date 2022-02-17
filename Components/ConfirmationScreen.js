import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

class ConfirmationScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.titleText}>Merci pour votre inscription !</Text>
                <Text style={styles.text}>Pour accéder à notre application cliquez sur continuer</Text>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate("HomeScreen")}>
                    <Text style={styles.textButton}> Continuer </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    submitButton: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 20,
        height: 40,
        width: 140,
        elevation: 5,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})

export default ConfirmationScreen