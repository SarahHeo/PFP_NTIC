import React from 'react';
import { Button, View, Text } from 'react-native';
import AuthenticationService, { setToken } from '../services/AuthenticationService';
import Form from './Form.jsx';
import {validateContent, validateLength } from '../validators/authenticationValidator.jsx';
import styles from '../style/authenticationStyle.jsx';

function RegisterScreen({navigation}) {
    const handleResult = async (result) => {
        if (result.data.auth_token) {
            await setToken(result.data.auth_token);
            navigation.navigate('Home');
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    return (
        <View style={styles.main_container}>
            <Text style={styles.title}>Register</Text>
            <Form
            style={styles.form}
            action={AuthenticationService.register}
            afterSubmit={handleResult}
            buttonText="Register"
            fields={{
                name: {
                    label: 'Name',
                    validators: [validateContent],
                },
                firstName: {
                    label: 'First Name',
                    validators: [validateContent],
                },
                email: {
                    label: 'Email',
                    validators: [validateContent],
                    inputProps: {
                    keyboardType: 'email-address',
                    },
                },
                password: {
                    label: 'Password',
                    validators: [validateContent, validateLength],
                    inputProps: {
                    secureTextEntry: true,
                    },
                },
            }}
            />
            <Text></Text>
            <Button  title = "Log in instead" onPress={() => navigation.navigate('Login')}/>
        </View>
    );
}

export default RegisterScreen;