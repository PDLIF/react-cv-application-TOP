import React, {useState} from 'react';
import '../../styles/GeneralInfo.css';

function GeneralInfo({
    personalInfo,
    onPersonalInfoChange,
}) {
    const [isEditing, setIsEditing] = useState(true);
    const [tempFormData, setTempFormData] = useState(personalInfo);

    const handleChange = (e) => {
        setTempFormData({
            ...tempFormData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        Object.entries(tempFormData).forEach(([field, value]) => {
            onPersonalInfoChange(field, value);
        });
    }

    const handleEdit = (e) => {
        setTempFormData(formData);
        setIsEditing(true);
    }

    return (
        <div className='general-section'>
            <h2>General Information</h2>
            {isEditing ? (
                <>    
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name='fullName'
                            placeholder='Full Name'
                            value={tempFormData.fullName}
                            onChange={handleChange}
                        />
                        <input 
                            type="email"
                            name='email'
                            placeholder='Email'
                            value={tempFormData.email}
                            onChange={handleChange}
                        />
                        <input 
                            type="tel"
                            name='phone'
                            placeholder='Phone'
                            value={tempFormData.phone}
                            onChange={handleChange}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </>
            ) : (
                <div>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default GeneralInfo;