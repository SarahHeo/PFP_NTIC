import React from 'react';
import { Button, View, Text } from 'react-native';
import AuthenticationService, { setToken } from '../services/AuthenticationService.jsx';
import Form from '../components/Form.jsx';
import {validateContent,  
    validateEmail, 
    validatePassword } from '../validators/authenticationValidator.jsx';
import styles from '../styles/screens/authentication.jsx';

function Login({navigation}) {
    const handleResult = async (result) => {
        if (result.data.auth_token) {
            console.log(result.data);
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