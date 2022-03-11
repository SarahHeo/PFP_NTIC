import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from '../style/settings.js';

function Settings() {

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

export default Settings;