function EducationPrint({ education }) {
    return(
        <div className="education-info">
            <h2>Education</h2>

            {education.map(ed => (
                <div key={ed.id} className="education-unit">
                    <h3>{ed.degree}</h3>
                    <p>{ed.school}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationPrint;