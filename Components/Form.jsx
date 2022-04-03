import React, { useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { hasValidationError, validateFields } from '../validators/authenticationValidator.jsx';
import styles from '../style/formStyle.jsx';


// Create empty state with different substates for every key in fields

const createInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
        state[key] = '';
    });

    return state;
}

const Form = ({fields, buttonText, action, afterSubmit }) => {
    // Create an array of keys out of the keys of fields
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(createInitialState(fieldKeys));
    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState(createInitialState(fieldKeys))
 
    const onChangeValue = (key, value) => {
        const newValues = { ...values, [key] : value };
        setValues(newValues);
        console.log(values);

        if (validationErrors[key]) {
            const newErrors = { ...validationErrors, [key]: ''};
            setValidationErrors(newErrors);
        }
    }

    /*const getValues = () => {
        return fieldKeys.sort().map(key => values[key]);
    };*/

    const submit = async () => {
        setErrorMessage('');
        setValidationErrors(createInitialState(fieldKeys));

        const errors = validateFields(fields, values);
        if (hasValidationError(errors)) {
            return setValidationErrors(errors);
        }
        try {
            const result = await action(values);
            await afterSubmit(result);
        } catch(e) {
            setErrorMessage(e.message);
        }        
    };

    // for every key, create a input area in our form
    return (
        <View>
            <Text>{errorMessage}</Text>
            {fieldKeys.map((key) => {
            const field = fields[key];
            const fieldError = validationErrors[key];

            return(

                <View key ={key}>

                    <Text style={styles.field}>{field.label}</Text>
                    <TextInput
                    style={styles.input_area}
                    {...field.inputProps}
                    value={values[key]}
                    onChangeText= {(text) => onChangeValue(key, text)} />
                    <Text>{fieldError}</Text>
                </View>
            );
            })}

            <Button title={buttonText} onPress={submit}/>
        </View>
    );
};

export default Form;