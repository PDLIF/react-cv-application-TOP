import React, {useState} from 'react';
import '../../styles/Education.css'

function Education() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
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
        <div className="education-section">
            <h2>Education</h2>
            {isEditing ? (
                <>
                    <p><strong>School name:</strong> {formData.schoolName}</p>
                    <p><strong>Title of study:</strong> {formData.titleOfStudy}</p>
                    <p><strong>Date of study:</strong> {formData.dateOfStudy}</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name='schoolName'
                            placeholder='School name'
                            value={tempFormData.schoolName}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name='titleOfStudy'
                            placeholder='Title of study'
                            value={tempFormData.titleOfStudy}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name='dateOfStudy'
                            placeholder='Date of study'
                            value={tempFormData.dateOfStudy}
                            onChange={handleChange}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </>
            ) : (
                <div>
                    <p><strong>School name:</strong> {formData.schoolName}</p>
                    <p><strong>Title of study:</strong> {formData.titleOfStudy}</p>
                    <p><strong>Date of study:</strong> {formData.dateOfStudy}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default Education;