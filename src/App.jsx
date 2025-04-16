import GeneralInfo from './components/generalInfo/GeneralInfo';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';

function App() {

  return (
    <div className='App'>
      <h1>CV Builder</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
