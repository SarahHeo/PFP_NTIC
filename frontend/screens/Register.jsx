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
            navigation.navigate('Home');
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    return (
        <View style={styles.main_container}>
            <Form
            title="Register"
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
            <Button  title = "Log in instead" onPress={() => navigation.navigate('Login')}/>
        </View>
    );
}

export default Register;