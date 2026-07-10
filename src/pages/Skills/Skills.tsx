import React, { JSX } from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineWeb, MdOutlineWebStories } from "react-icons/md";
import { PiFileCSharp } from "react-icons/pi";
import { usePageTitle } from '../../hooks/usePageTitle';
import { skillsByCategory } from '../../data/skills';


const iconMap: { [key: string]: JSX.Element } = {
    FaNodeJs: <FaNodeJs />,
    FaJava: <FaJava />,
    FaReact: <FaReact />,
    SiTypescript: <SiTypescript />,
    SiJavascript: <SiJavascript />,
    LuBrainCircuit: <LuBrainCircuit />,
    MdOutlineWeb: <MdOutlineWeb />,
    MdOutlineWebStories: <MdOutlineWebStories />,
    FaPython: <FaPython />,
    PiFileCSharp: <PiFileCSharp />
};

const Skills: React.FC = () => {
    usePageTitle('Skills');
    return (
        <div className="skills-container">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div className="skill-category" key={category}>
                    <h3 className="category-title">{category}</h3>
                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div key={skill.title} className="skill-card">
                                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                                <h3 className="skill-name" aria-label={skill.title}>
                                    {skill.title.split('').map((letter: string, i: number) => (
                                        <span
                                            key={i}
                                            className="letter"
                                            aria-hidden="true"
                                            style={{ animationDelay: `${i * 0.05}s` }}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                </h3>
                                <p className="skill-description">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
