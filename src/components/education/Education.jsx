import React, {useState} from 'react';
import '../../styles/cv-form.css'

function Education({
    education,
    onAdd,
    onUpdate,
    onRemove
}) {
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [isEducationExpanded, setIsEducationExpanded] = useState(false);
    const [tempFormData, setTempFormData] = useState({ school: '', degree: '', startDate: '', endDate: '', description: '' });

    const handleAddNew = () => {
        setIsAddingNew(true);
        setTempFormData({ school: '', degree: '', startDate: '', endDate: '', description: '' });
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

        if (editingId) {
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

    const handleRemove = (ed) => {
        onRemove(ed.id);
    }

    const handleCancel = () => {
        setEditingId(null);
        setIsAddingNew(false);
    }

    return (
        <div className="flex form-section education-section">
            <button onClick={() => setIsEducationExpanded(!isEducationExpanded)} className='expand-button flex'>
                <h2>Education</h2>
                <i class={`fa-solid fa-chevron-down ${isEducationExpanded ? 'rotate-180' : ''}`}></i>
            </button>

            {isEducationExpanded && (
                <div className="content-wrapper flex">
                    {(editingId !== null || isAddingNew) ? (
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
                                type="text"
                                name='startDate'
                                placeholder='Start date (e.g. 12-04-2012)'
                                value={tempFormData.startDate}
                                onChange={handleChange}
                            />
                            <input 
                                type="text"
                                name='endDate'
                                placeholder='End date (e.g. 12-04-2012)'
                                value={tempFormData.endDate}
                                onChange={handleChange}
                            />
                            <textarea 
                                type="text"
                                name='description'
                                placeholder='Description'
                                value={tempFormData.description}
                                onChange={handleChange}
                                rows={4}
                            />
                            <div className="flex form-actions">
                                <button type='submit'>Save</button>
                                <button type='button' onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <ul className={`entries-section flex ${education.length === 0 ? 'hidden' : ''}`}>
                                {education.map(ed => (
                                    <li key={ed.id} className="flex br-10 entry education-entry">
                                        <h3>{ed.school || 'Unknown school'}</h3>
                                        <div className="flex entry-actions">
                                            <button onClick={() => handleEdit(ed)} className='edit-btn flex'><i class="fa-solid fa-pen-to-square"></i></button>
                                            <button onClick={() => handleRemove(ed)} className='remove-btn'><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={handleAddNew} className='add-btn'>
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Education;