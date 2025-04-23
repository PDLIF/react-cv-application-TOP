import React, {useState} from 'react';
import '../../styles/form-section.css'

function GeneralInfo({
    personalInfo,
    onPersonalInfoChange
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
        setTempFormData(personalInfo);
        setIsEditing(true);
    }

    return (
        <div className='form-section general-section'>
            <h2>General Information</h2>

            {isEditing === true && (
                <>   
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
            )}
            
            {isEditing === false && (
                <div>
                    <p><strong>Name:</strong> {personalInfo.fullName}</p>
                    <p><strong>Email:</strong> {personalInfo.email}</p>
                    <p><strong>Phone:</strong> {personalInfo.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default GeneralInfo;