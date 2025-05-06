import useCVData from './hooks/useCVData';
import GeneralInfo from './components/generalInfo/GeneralInfo';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import CVPreview from './components/other/CVPreview';

import './styles/App.css'

function App() {
  const {
    cvData,
    updatePersonalInfo,
    addEducation,
    addExperience,
    updateEducation,
    updateExperience,
    removeEducation,
    removeExperience,
  } = useCVData();

  return (
    <div className='app flex'>
      <div className="cv-form flex">
        <GeneralInfo personalInfo={cvData.personalInfo} onPersonalInfoChange={updatePersonalInfo} />
        <Education education={cvData.education} onAdd={addEducation} onUpdate={updateEducation} onRemove={removeEducation} />
        <Experience experience={cvData.experience} onAdd={addExperience} onUpdate={updateExperience} onRemove={removeExperience} />
      </div>
      <CVPreview generalInfo={cvData.personalInfo} education={cvData.education} experience={cvData.experience} />
    </div>
  );
}

export default App;
