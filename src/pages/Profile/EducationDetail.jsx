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
    EuiSelect,
    EuiFilePicker,
} from '@elastic/eui';

const EducationDetail = () => {
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

    const handleFileChange = (fieldName, files) => {
        console.log("image s")
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

    const degreeOptions = [
        { value: 'ten', text: 'SLC'},
        { value: 'twelve', text: '+2' },
        { value: 'bachelor', text: 'Bachelor' },
    ];

    const inputStyle = { width: '300px' };
    return (
        <div className='background'>
            <div className="form-content">
                
                <div className="left-side">
                    <div className="book-detail-image"></div>
                </div>

                <div className="right-side">
                    <div className='army-detail' style={{ textAlign: 'center', marginBottom: '0%' }}>
                        <EuiIcon type="user" size="xl"/>
                            <EuiText>
                                <h4>Education Detail</h4>
                            </EuiText>
                    </div>        
                    <EuiForm component="form"  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0px' }}>    
                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Degree Type</span>} style={{ textAlign: 'center',color: 'blue', marginBottom: '0px' }} isRequiblue>
                            <EuiSelect
                                name="degree_type"
                                options={degreeOptions}
                                value={formData.degree_type}
                                onChange={(e) => handleChange('degree_type', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Institution</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <EuiFieldText
                                name="institution"
                                value={formData.institution}
                                onChange={(e) => handleChange('institution', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Board_university</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <EuiFieldText
                                type="board_university"
                                name="board_university"
                                value={formData.email}
                                onChange={(e) => handleChange('board_university', e.target.value)}
                                style={inputStyle}
                            />
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Start_date</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <div style={inputStyle}>
                                <EuiDatePicker
                                    name="start_date"
                                    value={formData.start_date}
                                    onChange={(e) => handleChange('start_date', e.target.value)}
                                    style={inputStyle}
                                />
                            </div>    
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>End_date</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <div style={inputStyle}>
                                <EuiDatePicker
                                    name="end_date"
                                    selected={formData.end_date}
                                    onChange={(date) => handleDateChange('end_date', date)}
                                    dateFormat="YYYY-MM-DD"
                                />
                            </div>
                        </EuiFormRow>

                        <EuiFormRow label={<span style={{ color: '#e43164' }}>Certificate Images</span>} style={{ textAlign: 'center', marginBottom: '0px' }}>
                            <div style={inputStyle}>
                                <EuiFilePicker
                                    id="certificate_images"
                                    onChange={(files) => handleFileChange('certificate_images', files)}
                                    display="default"
                                    accept={['.jpg', '.jpeg', '.png']}
                                    multiple
                                />
                            </div>
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
export default EducationDetail;