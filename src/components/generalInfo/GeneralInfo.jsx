import React, {useState} from 'react';
import '../../styles/GeneralInfo.css';

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [tempFormData, setTempFormData] = useState(formData);

    const handleChange = (e) => {
        setTempFormData({
            ...tempFormData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        setFormData(tempFormData);
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
                            name='name'
                            placeholder='Name'
                            value={tempFormData.name}
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