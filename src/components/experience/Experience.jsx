import React, {useState} from 'react';
import '../../styles/Experience.css'

function Experience({
    experience,
    onAdd,
    onUpdate,
    onRemove
}) {
    const [editingId, setEditingId] = useState(null);
    const [tempFormData, setTempFormData] = useState({ companyName: '', position: '', mainTasks: '', dateFrom: '', dateTo: '' });

    const handleAddNew = () => {
        const newId = onAdd();
        setEditingId(newId);
        setTempFormData({ companyName: '', position: '', mainTasks: '', dateFrom: '', dateTo: '' });
    }

    const handleEdit = (exp) => {
        setEditingId(exp.id);
        setTempFormData({ ...exp });
    }
    
    const handleChange = (event) => {
        setTempFormData({
            ...tempFormData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Object.entries(tempFormData).forEach(([field, value]) => {
            onUpdate(editingId, field, value);
        });
        setEditingId(null);
    }

    const handleRemove = (exp) => {
        onRemove(exp.id);
    }

    const handleCancel = () => {
        setEditingId(null);
    }

    return (
        <div className="experience-section">
            <h2>Experience</h2>

            {editingId !== null && (
                <form onSubmit={handleSubmit} className="experience-edit-form">
                    <input 
                        type="text"
                        name='position'
                        placeholder='Position'
                        value={tempFormData.position}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name='companyName'
                        placeholder='Company name'
                        value={tempFormData.companyName}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name='mainTasks'
                        placeholder='Main tasks'
                        value={tempFormData.mainTasks}
                        onChange={handleChange}
                    />
                    <input 
                        type="date"
                        name='dateFrom'
                        placeholder='Date from'
                        value={tempFormData.dateFrom}
                        onChange={handleChange}
                    />
                    <input 
                        type="date"
                        name='dateTo'
                        placeholder='Date to'
                        value={tempFormData.dateTo}
                        onChange={handleChange}
                    />
                    <div className="form-actions">
                        <button type='submit'>Save</button>
                        <button type='button' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            )}

            {editingId === null && (
                <>
                    {experience.map(exp => (
                        <div key={exp.id} className="experience-entry">
                            <h3>{exp.position || 'Unknown position'}</h3>
                            <div className="entry-actions">
                                <button onClick={() => handleEdit(exp)} className='edit-btn'>Edit</button>
                                <button onClick={() => handleRemove(exp)} className='remove-btn'>Remove</button>
                            </div>
                        </div>
                    ))}
                </>
            )}

            <button onClick={handleAddNew} className='add-btn'>+ Add</button>
        </div>
    );
}

export default Experience;