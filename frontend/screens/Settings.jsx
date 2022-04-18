import React from 'react';
import { Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../styles/screens/settings.jsx';
import globalStyle from '../styles/components/global.jsx';

function Settings() {

    return (
        <View style={styles.main_container}>
            <View style={globalStyle.mainTitleContainer}>
                <Text style={globalStyle.mainTitle}>Veuillez vous connecter pour accéder aux réglages</Text>
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

export default Settings;