import React, {useState} from 'react';
import '../../styles/Experience.css'

function Experience() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        companyName: '',
        position: '',
        mainTasks: '',
        dateFrom: '',
        dateTo: ''
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
                    <p><strong>Company name:</strong> {formData.companyName}</p>
                    <p><strong>Position:</strong> {formData.position}</p>
                    <p><strong>Responsibilities:</strong> {formData.mainTasks}</p>
                    <p><strong>From:</strong> {formData.dateFrom}</p>
                    <p><strong>To:</strong> {formData.dateTo}</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name='companyName'
                            placeholder='Company name'
                            value={tempFormData.companyName}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name='position'
                            placeholder='Position'
                            value={tempFormData.position}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name='mainTasks'
                            placeholder='Resposibilities'
                            value={tempFormData.mainTasks}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name='dateFrom'
                            placeholder='From (e.g. Jan 2022)'
                            value={tempFormData.dateFrom}
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name='dateTo'
                            placeholder='To (e.g. Dec 2023)'
                            value={tempFormData.dateTo}
                            onChange={handleChange}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </>
            ) : (
                <div>
                    <p><strong>Company name:</strong> {formData.companyName}</p>
                    <p><strong>Position:</strong> {formData.position}</p>
                    <p><strong>Responsibilities:</strong> {formData.mainTasks}</p>
                    <p><strong>From:</strong> {formData.dateFrom}</p>
                    <p><strong>To:</strong> {formData.dateTo}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default Experience;