import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styles from '../style/favorites.js';

function Favorites() {

    return (
        <View style={styles.main_container}>
            <View style={styles.container}>
                <View style={styles.phrase_container}>
                    <Text>Phrases favoris</Text>
                </View>
                <View style={styles.phrase_container}>
                    <Text>Phrases favoris</Text>
                </View>
                <View style={styles.phrase_container}>
                    <Text>Phrases favoris</Text>
                </View>
                <View style={styles.phrase_container}>
                    <Text>Phrases favoris</Text>
                </View>
                <View style={styles.phrase_container}>
                    <Text>Phrases favoris</Text>
                </View>
            </View>
        </View>
    )
}

export default Favorites;
