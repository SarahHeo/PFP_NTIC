import React, { useState, useEffect, useCallback } from 'react';
import { Button, View, Text } from 'react-native';
import AuthenticationService, { setToken, getToken } from '../services/AuthenticationService.jsx';
import Form from '../components/Form.jsx';
import {validateContent, validateEmail, validatePassword } from '../validators/authenticationValidator.jsx';
import styles from '../styles/screens/authentication.jsx';

function Login({navigation}) {

    useEffect(() => {
        async function checkIfAlreadyLoggedIn() {
            const token = await getToken();
            if (token != null){
                navigation.navigate('MainApp');
            }
        }
        checkIfAlreadyLoggedIn();
    }, []);

    const handleResult = async (result) => {
        if (result.data.auth_token) {
            successLoginCallback(result.data);
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    let successLoginCallback = async function(data){
        console.log(data);
        await setToken(data.auth_token);

        navigation.navigate('MainApp', { screen: 'Home' });
    }

    return (
        <View style={styles.main_container}>
            <Form
            title="Log In"
            style={styles.form}
            action={AuthenticationService.login}
            afterSubmit={handleResult}
            buttonText="Log in"
            fields={{
                email: {
                    label: 'Email',
                    validators: [validateContent, validateEmail],
                    inputProps: {
                    keyboardType: 'email-address',
                    },
                },
                password: {
                    label: 'Password',
                    validators: [validateContent, validatePassword],
                    inputProps: {
                    secureTextEntry: true,
                    },
                },
            }}
            />
            <Text></Text>
            <Button title="Register instead" onPress={() => navigation.navigate('Register')}/>
        </View>
        
    );
}

export default Login;