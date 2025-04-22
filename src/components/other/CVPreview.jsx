import GeneralInfoPrint from "../generalInfo/GeneralInfoPrint";

function CVPreview({ generalInfo, education, experience }) {
    return(
        <div className="cv-preview">
            <GeneralInfoPrint fullName={generalInfo.fullName} email={generalInfo.email} phone={generalInfo.phone} adress={generalInfo.adress} />
        </div>
    )
}

export default CVPreview;