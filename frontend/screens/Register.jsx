import React from 'react';
import { Button, View, Text } from 'react-native';
import AuthenticationService, { setToken } from '../services/AuthenticationService';
import Form from '../components/Form.jsx';
import {validateContent,  
    validateEmail, 
    validatePassword } from '../validators/authenticationValidator.jsx';
import styles from '../styles/screens/authentication.jsx';

function Register({navigation}) {
    const handleResult = async (result) => {
        if (result.data.auth_token) {
            await setToken(result.data.auth_token);
            navigation.navigate('MainApp', { screen: 'Users' });
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    return (
        <View style={styles.main_container}>
            <Form
            title="Inscription"
            style={styles.form}
            action={AuthenticationService.register}
            afterSubmit={handleResult}
            buttonText="S'inscrire"
            fields={{
                name: {
                    label: 'Nom',
                    validators: [validateContent],
                },
                firstName: {
                    label: 'Prénom',
                    validators: [validateContent],
                },
                email: {
                    label: 'Adresse Email',
                    validators: [validateContent, validateEmail],
                    inputProps: {
                    keyboardType: 'email-address',
                    },
                },
                password: {
                    label: 'Mot de passe',
                    validators: [validateContent, validatePassword],
                    inputProps: {
                    secureTextEntry: true,
                    },
                },
            }}
            />
            <Text></Text>
            <Button  title = "Se connecter" onPress={() => navigation.navigate('LogIn')}/>
        </View>
    );
}

export default Register;