import useCVData from './hooks/useCVData';
import GeneralInfo from './components/generalInfo/GeneralInfo';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';

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
    <div className='App'>
      <h1>CV Builder</h1>
      <GeneralInfo personalInfo={cvData.personalInfo} onPersonalInfoChange={updatePersonalInfo} />
      <Education education={cvData.education} onAdd={addEducation} onUpdate={updateEducation} onRemove={removeEducation} />
      <Experience experience={cvData.experience} onAdd={addExperience} onUpdate={updateExperience} onRemove={removeExperience} />
    </div>
  );
}

export default App;
