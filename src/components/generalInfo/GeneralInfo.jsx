import React, {useState} from 'react';
import '../../styles/form-section.css'

function GeneralInfo({
    personalInfo,
    onPersonalInfoChange
}) {
    const [isEditing, setIsEditing] = useState(false);
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
        <div className={`form-section general-section ${isEditing ? '' : 'flex'}`}>
            <h2 className='heading'>General Information</h2>

            {isEditing === true && (
                <>   
                    <form className='flex' onSubmit={handleSubmit}>
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
                        <input 
                            type="text"
                            name='github'
                            placeholder='Git Hub'
                            value={tempFormData.github}
                            onChange={handleChange}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </>
            )}
            
            {isEditing === false && (
                <>
                    <button className='edit-btn' onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    )
}

export default GeneralInfo;