import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../style/cameraPreviewStyle.jsx';

const CameraPreview = ({ photo, onRetake, onSave  }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: photo && photo.uri}}
                style={styles.image}
            >
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onRetake}>
                    <ImageBackground style={styles.image} source={require('../Images/Cancel.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onSave}>
                    <ImageBackground style={styles.image} source={require('../Images/Validate.png')}/>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

export default CameraPreview;