import React, { JSX } from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiSupabase, SiTensorflow, SiKeras, SiTableau } from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu';
import { MdOutlineWeb, MdOutlineWebStories, MdOutlineSmartToy } from 'react-icons/md';
import { usePageTitle } from '../../hooks/usePageTitle';
import { skillsByCategory } from '../../data/skills';

const iconMap: { [key: string]: JSX.Element } = {
    FaNodeJs: <FaNodeJs />,
    FaJava: <FaJava />,
    FaReact: <FaReact />,
    FaPython: <FaPython />,
    FaAws: <FaAws />,
    FaDatabase: <FaDatabase />,
    SiTypescript: <SiTypescript />,
    SiJavascript: <SiJavascript />,
    SiSupabase: <SiSupabase />,
    SiTensorflow: <SiTensorflow />,
    SiKeras: <SiKeras />,
    SiTableau: <SiTableau />,
    LuBrainCircuit: <LuBrainCircuit />,
    MdOutlineWeb: <MdOutlineWeb />,
    MdOutlineWebStories: <MdOutlineWebStories />,
    MdOutlineSmartToy: <MdOutlineSmartToy />,
};

const Skills: React.FC = () => {
    usePageTitle('Skills');
    return (
        <div className="skills-container">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div className="skill-category" key={category}>
                    <h3 className="category-title">{category}</h3>
                    <div className={`skills-grid skills-grid--${skills.length % 3 === 0 ? '3' : skills.length % 2 === 0 ? '2' : '3'}`}>
                        {skills.map((skill) => (
                            <div key={skill.title} className="skill-card">
                                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                                <h3 className="skill-name" aria-label={skill.title}>
                                    {skill.title.split('').map((letter: string, i: number) => (
                                        <span
                                            key={i}
                                            className={`letter${letter === ' ' ? ' letter-space' : ''}`}
                                            aria-hidden="true"
                                            style={{ animationDelay: `${i * 0.05}s` }}
                                        >
                                            {letter === ' ' ? '\u00A0' : letter}
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
