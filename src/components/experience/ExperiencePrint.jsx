function ExperiencePrint({ experience }) {
    return(
        <div className="experience-info">
            <h2>Experience</h2>

            {experience.map(exp => (
                <div key={exp.id} className="experience-unit">
                    <h3>{exp.position}</h3>
                    <p>{exp.company}</p>
                </div>
            ))}
        </div>
    );
}

export default ExperiencePrint;