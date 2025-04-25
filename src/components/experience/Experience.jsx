import React, {useState} from 'react';
import '../../styles/form-section.css'

function Experience({
    experience,
    onAdd,
    onUpdate,
    onRemove
}) {
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [tempFormData, setTempFormData] = useState({ companyName: '', position: '', mainTasks: '', dateFrom: '', dateTo: '' });

    const handleAddNew = () => {
        setIsAddingNew(true);
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

        if(editingId) {
            Object.entries(tempFormData).forEach(([field, value]) => {
                onUpdate(editingId, field, value);
            });
            setEditingId(null);
        }

        if (isAddingNew) {
            const newId = onAdd();
            Object.entries(tempFormData).forEach(([field, value]) => {
                onUpdate(newId, field, value);
            });
            setIsAddingNew(false);
        }
    }

    const handleRemove = (exp) => {
        onRemove(exp.id);
    }

    const handleCancel = () => {
        setEditingId(null);
        setIsAddingNew(false);
    }

    return (
        <div className="flex form-section experience-section">
            <h2>Experience</h2>

            {((editingId !== null) || (isAddingNew)) && (
                <form onSubmit={handleSubmit} className="flex experience-edit-form">
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
                    <div className="flex form-actions">
                        <button type='submit'>Save</button>
                        <button type='button' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            )}

            {((editingId === null) && (!isAddingNew)) && (
                <>
                    <ul className={`flex ${experience.length === 0 ? 'hidden' : ''} entries-section`}>
                        {experience.map(exp => (
                            <li key={exp.id} className="flex br-10 entry experience-entry">
                                <h3>{exp.position || 'Unknown position'}</h3>
                                <div className="flex entry-actions">
                                    <button onClick={() => handleEdit(exp)} className='edit-btn'>Edit</button>
                                    <button onClick={() => handleRemove(exp)} className='remove-btn'>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleAddNew} className='add-btn'>+ Add</button>
                </>
            )}
        </div>
    );
}

export default Experience;