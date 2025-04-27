function EducationPrint({ education }) {
    return(
        <div className="education-info section">
            <h2 className={`heading ${education.length === 0 ? 'hidden' : ''} br-5`}>Education</h2>

            <div className="flex info">
                {education.map(ed => (
                    <div key={ed.id} className="flex info-unit">
                        <p className="fs-400 period">{ed.startDate.split('-').slice(0, 2).join('-') + ' – ' + ed.endDate.split('-').slice(0, 2).join('-')}</p>
                        <div className="flex about">
                            <div className="flex title">
                                <h3 className="fs-500 degree">{ed.degree}</h3>
                                <p className="fs-400 school">{ed.school}</p>
                            </div>
                            <p className="fs-400 description">{ed.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationPrint;