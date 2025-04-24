function EducationPrint({ education }) {
    return(
        <div className="section education-info">
            <h2 className={`heading ${education.length === 0 ? 'hidden' : ''} `}>Education</h2>

            {education.map(ed => (
                <div key={ed.id} className="info-unit">
                    <p className="period">{ed.startDate.split('-').slice(0, 2).join('-') + ' – ' + ed.endDate.split('-').slice(0, 2).join('-')}</p>
                    <div className="title">
                        <h3>{ed.degree}</h3>
                        <p>{ed.school}</p>
                    </div>
                    <p className="description">{ed.description}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationPrint;