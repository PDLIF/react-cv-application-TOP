import GeneralInfoPrint from "../generalInfo/GeneralInfoPrint";
import EducationPrint from "../education/EducationPrint";
import ExperiencePrint from "../experience/ExperiencePrint";

import '../../styles/CVPreview.css';

function CVPreview({ generalInfo, education, experience }) {
    return(
        <div className="cv-preview br-10">
            <GeneralInfoPrint fullName={generalInfo.fullName} email={generalInfo.email} phone={generalInfo.phone} adress={generalInfo.adress} />
            <EducationPrint education={education} />
            <ExperiencePrint experience={experience} />
        </div>
    )
}

export default CVPreview;