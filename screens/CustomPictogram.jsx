import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { Camera } from 'expo-camera';
import Form from '../components/Form.jsx';
import CameraPreview from '../components/CameraPreview.jsx';
import PictogramService from '../services/PictogramService.jsx';
import {validateContent} from '../validators/authenticationValidator.jsx';
import styles from '../styles/screens/customPictogram.jsx';


function CustomPictogram({navigation}) {

    const [isCameraOn, setIsCameraOn] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const camera = useRef(null);

    const startCamera = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        if (status === 'granted') {
            setIsCameraOn(true);
        } else {
            console.log("Access denied.");
        }
    }
    
    const savePhoto = () => {
        setIsCameraOn(false);
        setPreviewVisible(false);
        setCapturedImage(null);
        navigation.navigate('Home');
    }

    const retakePhoto = () => {
        setCapturedImage(null);
        setPreviewVisible(false);
        startCamera();
    }

    async function takePicture() {
        if (camera) {
            console.log('Picture Taken')
            let photo = await camera.current.takePictureAsync();
            console.log(photo);
            setPreviewVisible(true);
            setCapturedImage(photo);
        }
        else {
            console.log('Camera Not Open');
        }
    }

    function flipCamera() {
        setType(
            type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
    }

    const handleResult = async (result) => {
        if (result.data) {
            console.log("Customized pictogram successfully added")
            navigation.navigate('Home');
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    /*
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={camera} type={type}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={flipCamera}>
                    <ImageBackground style={styles.image} source={require('../Images/FlipCamera.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={takePicture}>
                    <ImageBackground style={styles.image} source={require('../Images/Camera.png')}/>
                </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
    */
    
    return (
        <View style={styles.container}>
        {isCameraOn ? (
            <View style={styles.cameraContainer}>
                {previewVisible && capturedImage ? (
                    <CameraPreview photo={capturedImage} onRetake={retakePhoto} onSave={savePhoto}/>
                ) : (
                <Camera style={styles.camera} ref={camera} type={type}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={flipCamera}>
                            <ImageBackground style={styles.icon} source={require('../Images/FlipCamera.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={takePicture}>
                            <ImageBackground style={styles.icon} source={require('../Images/Camera.png')}/>
                        </TouchableOpacity>
                    </View>
                </Camera>
                )}
            </View>
        ) : (
            <View>
                <Form
                title="Add a custom pictogram"
                action={PictogramService.addCustomPictogram}
                afterSubmit={handleResult}
                buttonText="Add"
                fields={{
                    name: {
                        label: 'Pictogram Name',
                        validators: [validateContent],
                    },
                    url: {
                        label: 'Pictogram URL',
                        validators: [validateContent],
                    },
                }}
                />
                <Button onPress={startCamera} title="Take picture"></Button>
            </View>
        )}
        </View>
    );
}

export default CustomPictogram;