import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

import styles from '../style/confirmationScreen.js';

function ConfirmationScreen() {

    return (
        <View style={styles.main_container}>
            <Text style={styles.titleText}>Thanks for signing up!</Text>
            <Text style={styles.text}>To access the application, press the button below.</Text>
            <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate("HomeScreen")}>
                <Text style={styles.textButton}>Go to the app</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConfirmationScreen;