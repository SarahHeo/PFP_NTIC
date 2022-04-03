export const validateContent = (text) => {
    if (!text) {
        return "Can't be empty.";
    }
}

export const validateLength = (text) => {
    if (text && text.length < 8) {
        return 'Minimal length is 8.';
    }
}

// Validate a field based on the validators it has
export const validateField = (validators, value) => {
    let error = '';
    validators.forEach(validator => {
        const validationError = validator(value);
        if (validationError) {
            error = validationError;
        }
    });
    return error;
};

// Validate all the fields of the form by calling validateField() on every field
export const validateFields = (fields, values) => {
    const errors = {};
    const fieldKeys = Object.keys(fields);
    fieldKeys.forEach(key => {
        const field = fields[key];
        const validators = field.validators;
        const value = values[key];
        if (validators && validators.length > 0) {
            const error = validateField(validators,  value);

            if (error) {
                errors[key] = error;
            }
        }
    });
    return errors;
};

// Check if an error has been found for any form fields
export const hasValidationError = (errors) => {
    return Object.values(errors).find((error) => error.length > 0);
}