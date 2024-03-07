import React, { useState } from 'react';
import './Signup.css';
import {
    EuiForm,
    EuiFormRow,
    EuiSelect,
    EuiFieldText,
    EuiFieldPassword,
    EuiDatePicker,
    EuiButton,
    EuiSpacer,
    EuiText,
    EuiIcon,
} from '@elastic/eui';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        email: '',
        gender: 'M',
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
        { value: 'M', text: 'Male'},
        { value: 'F', text: 'Female' },
    ];

    const inputStyle = { width: '300px' };
    return (
        <div className='background'>
            <div className='form-content'>
            <div className='login-logo' style={{ textAlign: 'center', marginBottom: '1px' }}>
                    <EuiIcon type="user" size="xxl" />
                    <EuiText>
                        <h2>Signup Form</h2>
                    </EuiText>
                </div>
                <EuiForm component="form"  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>    
                    <EuiFormRow label={<span style={{ color: '#e43164' }}>Full Name</span>} style={{ textAlign: 'center',color: 'blue', marginBottom: '5px' }} isRequiblue>
                        <EuiFieldText
                            name="full_name"
                            value={formData.full_name}
                            onChange={(e) => handleChange('full_name', e.target.value)}
                            style={inputStyle}
                        />
                    </EuiFormRow>

                    <EuiFormRow label={<span style={{ color: '#e43164' }}>Phone</span>} style={{ textAlign: 'center', marginBottom: '5px' }}>
                        <EuiFieldText
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            style={inputStyle}
                        />
                    </EuiFormRow>

                    <EuiFormRow label={<span style={{ color: '#e43164' }}>Email</span>} style={{ textAlign: 'center', marginBottom: '5px' }}>
                        <EuiFieldText
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            style={inputStyle}
                        />
                    </EuiFormRow>

                    <EuiFormRow label={<span style={{ color: '#e43164' }}>Gender</span>} style={{ textAlign: 'center', marginBottom: '5px' }}>
                        <EuiSelect
                            name="gender"
                            options={genderOptions}
                            value={formData.gender}
                            onChange={(e) => handleChange('gender', e.target.value)}
                            style={inputStyle}
                        />
                    </EuiFormRow>

                    <EuiFormRow label={<span style={{ color: '#e43164' }}>Date of Birth</span>} style={{ textAlign: 'center', marginBottom: '5px' }}>
                        <div style={inputStyle}>
                            <EuiDatePicker
                                name="date_of_birth"
                                selected={formData.date_of_birth}
                                onChange={(date) => handleDateChange('date_of_birth', date)}
                                dateFormat="YYYY-MM-DD"
                            />
                        </div>
                    </EuiFormRow>

                    <EuiFormRow label={<span style={{ color: '#e43164' }}>Password</span>} style={{ textAlign: 'center', marginBottom: '5px' }}>
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
                </div>
        </div>
    );
};

export default SignupForm;
