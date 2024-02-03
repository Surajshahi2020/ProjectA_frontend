import React, { useState } from 'react';
import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiFieldPassword,
    EuiButton,
    EuiSpacer,
    EuiText,
    EuiIcon,
} from '@elastic/eui';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/dashboard'); 
    };

    const [formData, setFormData] = useState({
        email: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedFormData = {
            ...formData,
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/accounts/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("accessToken", JSON.stringify(data.data.access));
                setSuccess(data.message);
                setError("");
                setFormData({
                    email: '',
                    password: '',
                });

                handleSignup();  
            } else {
                console.error('Error submitting form:', response.statusText);
                setSuccess(false);
                setError(data.message);
            }
        } catch (error) {
            console.error('Network error:', error.message);
        }
    };

    const inputStyle = { width: '300px' };
    return (
        <div className='background'>
            <div className='login-content'>
            <div className='login-logo' style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <EuiIcon type="user" size="xxl" />
                    <EuiText>
                        <h2>Login Form</h2>
                    </EuiText>
                </div>
                    <EuiForm component="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>    
                    <EuiFormRow label={<span style={{ color: '#e43164' }}>Email</span>} style={{ textAlign: 'center', marginBottom: '5px' }}>
                        <EuiFieldText
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            style={inputStyle}
                        />
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
                        Login
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

export default Login;
