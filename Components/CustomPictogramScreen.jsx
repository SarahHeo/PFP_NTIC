import React from 'react';
import Form from './Form.jsx';
import PictogramService from '../services/PictogramService';
import {validateContent} from '../validators/authenticationValidator.jsx';

function CustomPictogramScreen({navigation}) {
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

    return (
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
    );
}

export default CustomPictogramScreen;