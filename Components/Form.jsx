import React, { useState} from 'react';
import { Text, View, Button } from 'react-native';
import { hasValidationError, validateFields } from '../validators/authenticationValidator.jsx';
import Field from './Field.jsx';
import styles from '../style/formStyle.jsx';


// Create empty state with different substates for every key in fields

const createInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
        state[key] = '';
    });

    return state;
}

const Form = ({title, fields, buttonText, action, afterSubmit }) => {
    // Create an array of keys out of the keys of fields
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(createInitialState(fieldKeys));
    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState(createInitialState(fieldKeys))
 
    const onChangeValue = (key, value) => {
        const newValues = { ...values, [key] : value };
        setValues(newValues);

        if (validationErrors[key]) {
            const newErrors = { ...validationErrors, [key]: ''};
            setValidationErrors(newErrors);
        }
    }

    /*const getValues = () => {
        return fieldKeys.sort().map(key => values[key]);
    };*/

    //submit function, calls the action of the form if all validations are ok, shows errors otherwise
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
            setErrorMessage(`An error has occured ${e.message}`);
        }        
    };

    // for every key, create a input area in our form
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.error}>{errorMessage}</Text>
            {fieldKeys.map((key) => {
                return(
                    <Field
                    key={key}
                    fieldName={key}
                    field={fields[key]}
                    error={validationErrors[key]}
                    onChangeText={onChangeValue}
                    value={values[key]}
                    />
                );
            })}

            <Button title={buttonText} onPress={submit}/>
        </View>
    );
};

export default Form;