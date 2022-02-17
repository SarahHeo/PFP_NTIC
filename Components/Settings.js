import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

class Settings extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.title_container}>
                    <Text style={styles.titleText}>Veuillez vous connecter pour accéder aux réglages</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.phrase_container}>
                        <TextInput style={styles.textInput} placeholder= "Email"/>
                        <TextInput style={styles.textInput} placeholder= "Mot de Passe"/>
                        <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
                            <Text style={styles.textButton}> Connexion </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30,
        backgroundColor: '#2a9d8F',
    },
    title_container: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        flex: 1.5,
        flexDirection: 'column',
        marginBottom: 90,
        justifyContent: 'center',

    },
    phrase_container: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems:'center',


    },
    textInput: {
        margin: 10,
        textAlign: 'center',
        height: 50,
        width: 500,
        backgroundColor: '#e0e0e0',
        borderColor: '#000000',
        borderWidth: 0.8,
        borderRadius: 60,
        elevation: 5,
        fontSize: 20,
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 20,
        height: 40,
        width: 150,
        elevation: 5,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})

export default Settings