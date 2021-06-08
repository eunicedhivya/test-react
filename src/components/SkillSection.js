import React from 'react'

function SkillSection({skill, progress}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h2 className="skill-title">{skill}</h2>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress" style={{width:progress}}></div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection
