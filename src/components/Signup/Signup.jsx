import React, { useState } from 'react';
import {
    EuiForm,
    EuiFormRow,
    EuiSelect,
    EuiFieldText,
    EuiFieldPassword,
    EuiDatePicker,
    EuiButton,
    EuiSpacer,
} from '@elastic/eui';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        email: '',
        gender: '',
        date_of_birth: '',
        password: '',
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const handleDateChange = (fieldName, date) => {
        setFormData({
            ...formData,
            [fieldName]: date,
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedDateOfBirth = formData.date_of_birth ? formData.date_of_birth.toISOString().split('T')[0] : null;
        const updatedFormData = {
            ...formData,
            date_of_birth: formattedDateOfBirth,
        };
    
        try {
            const response = await fetch('http://localhost:8000/api/v1/accounts/account-registration/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });
            const data = await response.json();

            if (response.ok) {
                console.log('Form submitted successfully!');
                setSuccess(data.message);
                setError("");
                setFormData({
                    full_name: '',
                    phone: '',
                    email: '',
                    gender: '',
                    date_of_birth: '',
                    password: '',
                });
            } else {
                console.error('Error submitting form:', response.statusText);
                setSuccess(false);
                setError(data.message);
            }
        } catch (error) {
            console.error('Network error:', error.message);
        }
    };

    const genderOptions = [
        { value: 'M', text: 'Male' },
        { value: 'F', text: 'Female' },
    ];

    const inputStyle = { width: '300px' };
    return (
        <EuiForm component="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>    
            <EuiFormRow label="Full Name" style={{ textAlign: 'center', marginBottom: '10px' }} isRequired>
                <EuiFieldText
                    name="full_name"
                    value={formData.full_name}
                    onChange={(e) => handleChange('full_name', e.target.value)}
                    style={inputStyle}
                />
            </EuiFormRow>

            <EuiFormRow label="Phone" style={{ textAlign: 'center', marginBottom: '10px' }}>
                <EuiFieldText
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    style={inputStyle}
                />
            </EuiFormRow>

            <EuiFormRow label="Email" style={{ textAlign: 'center', marginBottom: '10px' }}>
                <EuiFieldText
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    style={inputStyle}
                />
            </EuiFormRow>

            <EuiFormRow label="Gender" style={{ textAlign: 'center', marginBottom: '10px' }}>
                <EuiSelect
                    name="gender"
                    options={genderOptions}
                    value={formData.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    style={inputStyle}
                />
            </EuiFormRow>

            <EuiFormRow label="Date of Birth" style={{ textAlign: 'center', marginBottom: '10px' }}>
                <div style={inputStyle}>
                    <EuiDatePicker
                        name="date_of_birth"
                        selected={formData.date_of_birth}
                        onChange={(date) => handleDateChange('date_of_birth', date)}
                        dateFormat="YYYY-MM-DD"
                    />
                </div>
            </EuiFormRow>

            <EuiFormRow label="Password" style={{ textAlign: 'center', marginBottom: '10px' }}>
                <EuiFieldPassword
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    style={inputStyle}
                />
            </EuiFormRow>

            <EuiSpacer size="m" />
            <EuiButton type="submit" fill>
                Sign Up
            </EuiButton>
            {success && (
                <p className="success-message">{success}</p>
            )}
            {error && <p className="error-message">{error}</p>}
        </EuiForm>
    );
};

export default SignupForm;
