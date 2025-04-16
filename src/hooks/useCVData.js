import { useState } from "react";

function useCVData() {
    // state for all CV data
    const [cvData, setCVData] = useState({
        personalInfo: {
            fullName: '',
            email: '',
            phone: '',
            adress: '',
        },
        education: [],
        experience: [],
    });

    // function to update personal info
    const updatePersonalInfo = (field, value) => {
        setCVData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value },
        }));
    };

    // function for education entries
    const addEducation = () => {
        setCVData(prev => ({
            ...prev,
            education: [
                ...prev.education,
                { id: Date.now(), school: '', degree: '', startDate: '', endDate: '' },
            ],
        }));
    };

    const updateEducation = (id, field, value) => {
        setCVData(prev => ({
            ...prev,
            education: prev.education.map(ed => 
                ed.id === id ? { ...ed, [field]: value } : ed
            ),
        }));
    }

    const removeEducation = (id) => {
        setCVData(prev => ({
            ...prev,
            education: prev.education.filter(ed => ed.id !== id),
        }));
    };

    const addExperience = () => {
        setCVData(prev => ({
            ...prev,
            experience: [
                ...prev.experience,
                { id: Date.now(), companyName: '', position: '', mainTasks: '', dateFrom: '', dateTo: '' },
            ],
        }));
    };

    const updateExperience = (id, field, value) => {
        setCVData(prev => ({
            ...prev,
            experience: prev.experience.map(ex => 
                ex.id === id ? { ...ex, [field]: value } : ex
            ),
        }));
    }

    const removeExperience = (id) => {
        setCVData(prev => ({
            ...prev,
            experience: prev.experience.filter(ex => ex.id !== id),
        }));
    };

    return {
        cvData,
        updatePersonalInfo,
        addEducation,
        addExperience,
        updateEducation,
        updateExperience,
        removeEducation,
        removeExperience,
    };
}

export default useCVData;