import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, ImageBackground, Button, Image, Text } from 'react-native';
import PictogramService from '../services/PictogramService.jsx';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../styles/screens/customPictogram.jsx';
import { TextInput } from 'react-native-gesture-handler';
import UploadService from '../services/UploadService.jsx';

function CustomPictogramPicker() {

    const [pictogramName, setPictogramName] = useState('');
    const [pictogramImage, setPictogramImage] = useState(null);

    const handleDocumentSelection = async () => {
        try {
            const response = await DocumentPicker.getDocumentAsync({
                type: 'image/*'
            });
            setPictogramImage(response);
        } catch (error) {
            console.log(error);
            setPictogramImage(null);
        }
        
    }

    const submit = async () => {
        if (pictogramImage != null) {
            // If file selected then create FormData
            const data = new FormData();
            data.append('image', {
                uri : pictogramImage.uri,
                type: 'image/jpeg',
                name: pictogramName
            });
            UploadService.upload(data);
        }
    }

    /*const submit = async () => {
        const base64 = await FileSystem.readAsStringAsync(pictogramImage.uri, { encoding: 'base64' });
        PictogramService.addCustomPictogramImage({
            name: pictogramName,
            url: base64
        }).then(()=>
            {
                setPictogramImage(null);
                setPictogramName(null);
            }
        );
    }*/
  
    return (
        <View>
            <Text style={styles.field}>
                Nom du pictogramme
            </Text>
            <TextInput style={styles.input_area}
                value={pictogramName}
                onChangeText={name => setPictogramName(name)}
            />
            {pictogramImage && <Image
                source={{uri: pictogramImage && pictogramImage.uri}}
                style={styles.image}
            />}
            <Button onPress={handleDocumentSelection} title="Importer une photo"></Button>
            <Button onPress={submit} title="Créer le pictogramme"></Button>
        </View>
    );
}

export default CustomPictogramPicker;