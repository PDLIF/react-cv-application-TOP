function ExperiencePrint({ experience }) {
    return(
        <div className="section experience-info">
            <h2 className={`heading ${experience.length === 0 ? 'hidden' : ''} `}>Experience</h2>

            <div className="flex info">
                {experience.map(exp => (
                    <div key={exp.id} className="flex info-unit">
                        <p className="fs-400 period">{exp.dateFrom.split('-').slice(0, 2).join('-') + ' – ' + exp.dateTo.split('-').slice(0, 2).join('-')}</p>
                        <div className="flex about">
                            <div className="flex title">
                                <h3 className="fs-500 position">{exp.position}</h3>
                                <p className="fs-400 company-name">{exp.companyName}</p>
                            </div>
                            <p className="fs-400 description">{exp.mainTasks}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperiencePrint;