import React, {useState} from 'react';
import '../../styles/form-section.css'

function Education({
    education,
    onAdd,
    onUpdate,
    onRemove
}) {
    const [editingId, setEditingId] = useState(null);
    const [tempFormData, setTempFormData] = useState({ school: '', degree: '', startDate: '', endDate: '' });

    const handleAddNew = () => {
        const newId = onAdd();
        setEditingId(newId);
        setTempFormData({ school: '', degree: '', startDate: '', endDate: '' });
    }

    const handleEdit = (ed) => {
        setEditingId(ed.id);
        setTempFormData({ ...ed });
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

    const handleRemove = (ed) => {
        onRemove(ed.id);
    }

    const handleCancel = () => {
        setEditingId(null);
    }

    return (
        <div className="flex form-section education-section">
            <h2>Education</h2>
            
            {editingId !== null && (
                <form onSubmit={handleSubmit} className='flex education-edit-form'>
                    <input 
                        type="text"
                        name='school'
                        placeholder='School name'
                        value={tempFormData.school}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name='degree'
                        placeholder='Degree/Title'
                        value={tempFormData.degree}
                        onChange={handleChange}
                    />
                    <input 
                        type="date"
                        name='startDate'
                        placeholder='Start date'
                        value={tempFormData.startDate}
                        onChange={handleChange}
                    />
                    <input 
                        type="date"
                        name='endDate'
                        placeholder='End date'
                        value={tempFormData.endDate}
                        onChange={handleChange}
                    />
                    <div className="flex form-actions">
                        <button type='submit'>Save</button>
                        <button type='button' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            )}

            {editingId === null && (
                <>
                    <ul className={`flex ${education.length === 0 ? 'hidden' : ''} entries-section`}>
                        {education.map(ed => (
                            <li key={ed.id} className="flex entry education-entry">
                                <h3>{ed.school || 'Unknown school'}</h3>
                                <div className="flex entry-actions">
                                    <button onClick={() => handleEdit(ed)} className='edit-btn'>Edit</button>
                                    <button onClick={() => handleRemove(ed)} className='remove-btn'>Remove</button>
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

export default Education;