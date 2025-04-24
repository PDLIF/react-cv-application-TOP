function EducationPrint({ education }) {
    return(
        <div className="section education-info">
            <h2 className={`heading ${education.length === 0 ? 'hidden' : ''} `}>Education</h2>

            {education.map(ed => (
                <div key={ed.id} className="education-unit">
                    <p>{ed.startDate.split('-').slice(0, 2).join('-') + ' – ' + ed.endDate.split('-').slice(0, 2).join('-')}</p>
                    <h3>{ed.degree}</h3>
                    <p>{ed.school}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationPrint;