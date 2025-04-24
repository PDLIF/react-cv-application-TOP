function ExperiencePrint({ experience }) {
    return(
        <div className="experience-info">
            <h2 className={`heading ${experience.length === 0 ? 'hidden' : ''} `}>Experience</h2>

            {experience.map(exp => (
                <div key={exp.id} className="info-unit">
                    <p className="period">{exp.dateFrom.split('-').slice(0, 2).join('-') + ' – ' + exp.dateTo.split('-').slice(0, 2).join('-')}</p>
                    <div className="title">
                        <h3>{exp.position}</h3>
                        <p>{exp.company}</p>
                    </div>
                    <p className="description">{exp.mainTasks}</p>
                </div>
            ))}
        </div>
    );
}

export default ExperiencePrint;