import React, { useState } from 'react';
import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiFieldPassword,
    EuiButton,
    EuiSpacer,
} from '@elastic/eui';

const SignupForm = () => {
    const handleSubmit = () => {
        console.log('Form submitted:');
    };
    return (
        <EuiForm component="form" style={{display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column' ,marginTop:'50px'}}> 
            <EuiFormRow label="Username">
                <EuiFieldText
                    name="username"
                />
            </EuiFormRow>
            <EuiFormRow label="Email">
                <EuiFieldText
                    type="email"
                    name="email"
                />
            </EuiFormRow>
            <EuiFormRow label="Password">
                <EuiFieldPassword
                    name="password"
                />
            </EuiFormRow>
            <EuiSpacer size="m" />
            <EuiButton type="submit" fill>
                Sign Up
            </EuiButton>
        </EuiForm>
    );
};
export default SignupForm;
