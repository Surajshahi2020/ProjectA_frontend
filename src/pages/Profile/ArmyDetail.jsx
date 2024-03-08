import React, { useState } from 'react';
import './Profile.css';
import {
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiDatePicker,
    EuiButton,
    EuiSpacer,
    EuiText,
    EuiIcon,
} from '@elastic/eui';

const ArmyDetail = () => {
    const [formData, setFormData] = useState({
        rank: '',
        division: '',
        service_number: '',
        unit: '',
        enlistment_date: '',
        discharge_date: '',
        awards: '',
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
        const fenlistment_date = formData.enlistment_date ? formData.enlistment_date.toISOString().split('T')[0] : null;
        const fdischarge_date = formData.discharge_date ? formData.discharge_date.toISOString().split('T')[0] : null;
        const updatedFormData = {
            ...formData,
            enlistment_date: fenlistment_date,
            discharge_date: fdischarge_date,
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
                  rank: '',
                  division: '',
                  service_number: '',
                  unit: '',
                  enlistment_date: '',
                  discharge_date: '',
                  awards: '',
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

    const inputStyle = { width: '300px' };
    return (
        <div className='background'>
            <div className="form-content">
                <div className="left-side">
                    <div className="army-detail-image"></div>
                </div>
                <div className="right-side">
                    <div className='army-detail' style={{ textAlign: 'center', marginBottom: '0%' }}>
                        <EuiIcon type="user" size="xl"/>
                            <EuiText>
                                <h4>Army DetailForm</h4>
                            </EuiText>
                    </div>        
                    <EuiForm component="form"  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0px' }}>    
                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Rank</span>} style={{ textAlign: 'center',color: 'blue', marginBottom: '0px' }} isRequiblue>
                            <EuiFieldText
                                name="rank"
                                value={formData.rank}
                                onChange={(e) => handleChange('rank', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Division</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <EuiFieldText
                                name="division"
                                value={formData.division}
                                onChange={(e) => handleChange('division', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Service_number</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <EuiFieldText
                                type="service_number"
                                name="service_number"
                                value={formData.email}
                                onChange={(e) => handleChange('service_number', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Unit</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <EuiFieldText
                                name="unit"
                                value={formData.unit}
                                onChange={(e) => handleChange('unit', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Enlistment_date</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <div style={inputStyle}>
                                <EuiDatePicker
                                    name="enlistment_date"
                                    selected={formData.enlistment_date}
                                    onChange={(date) => handleDateChange('enlistment_date', date)}
                                    dateFormat="YYYY-MM-DD"
                                />
                            </div>
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Discharge_date</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <div style={inputStyle}>
                                <EuiDatePicker
                                    name="discharge_date"
                                    value={formData.discharge_date}
                                    onChange={(e) => handleChange('discharge_date', e.target.value)}
                                    style={inputStyle}
                                />
                                </div>
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Awards</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <EuiFieldText
                                name="awards"
                                value={formData.awards}
                                onChange={(e) => handleChange('awards', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiSpacer size="s" />
                        <EuiButton type="submit" fill>
                            Submit
                        </EuiButton>
                        {success && (
                            <p className="success-message">{success}</p>
                        )}
                        {error && <p className="error-message">{error}</p>}
                    </EuiForm>               

                </div>
            </div>
        </div>        
    );
};
export default ArmyDetail;