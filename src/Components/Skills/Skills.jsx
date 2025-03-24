import React, { useState } from "react";
import "./Skills.css";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGit } from "react-icons/fa";

const skillsData = [
    [ { name: "Java", level: "Intermediate", icon: <FaJava /> }, { name: "Python", level: "Intermediate", icon: <FaPython /> } ],
    [ { name: "HTML", level: "Intermediate", icon: <FaHtml5 /> }, { name: "CSS", level: "Intermediate", icon: <FaCss3Alt /> }, { name: "JavaScript", level: "Beginner", icon: <FaJs /> } ],
    [ { name: "React", level: "Beginner", icon: <FaReact /> }, { name: "Git", level: "Beginner", icon: <FaGit /> } ]
];

const Skills = () =>
{
    const [ selected, setSelected ] = useState( null );

    return (
        <section className="skills-section">
            <h1>MY SKILLS</h1>
            { skillsData.map( ( row, rowIndex ) => (
                <div key={ rowIndex } className="skills-row">
                    { row.map( ( skill, index ) => (
                        <div
                            className={ `skill-box ${ selected === skill.name ? "selected" : "" }` }
                            key={ index }
                            onClick={ () => setSelected( skill.name ) }
                        >
                            <div className="skill-icon">{ skill.icon }</div>
                            <p className="skill-name">{ skill.name }</p>
                            <p className="skill-level">{ skill.level }</p>
                        </div>
                    ) ) }
                </div>
            ) ) }

            <div className="projects-button-container">
                <a href="/projects" className="projects-button">View My Projects →</a>
            </div>
        </section>
    );
};

export default Skills;
