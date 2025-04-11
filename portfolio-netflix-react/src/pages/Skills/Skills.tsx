import React, { JSX } from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineWeb, MdOutlineWebStories  } from "react-icons/md";
import { PiFileCSharp } from "react-icons/pi";


const iconMap: { [key: string]: JSX.Element } = {
    FaNodeJs: <FaNodeJs />,
    FaJava: <FaJava />,
    FaReact: <FaReact />,
    SiTypescript: <SiTypescript />,
    LuBrainCircuit: <LuBrainCircuit />,
    MdOutlineWeb: <MdOutlineWeb />,
    MdOutlineWebStories: <MdOutlineWebStories />,
    FaPython: <FaPython />,
    PiFileCSharp: <PiFileCSharp />
};

const skillsByCategory = {
    Domains: [
        {title: "AI/ML", description: "Modern and Classical AI and Machine Learning Techniques", icon: 'LuBrainCircuit'},
        {title: "Web-Development", description: "Developing Modern, Dynamic Websites", icon: 'MdOutlineWeb'},
    ],
    Frontend: [
        {title: "HTML & CSS", description: "Web Markup and Styling", icon: 'MdOutlineWebStories '},
        {title: "JavaScript", description: "Scripting Language", icon: 'FaNodeJs'},
        {title: "TypeScript", description: "Type-safe Scripting", icon: 'SiTypescript'},
        {title: "React", description: "Frontend Framework", icon: 'FaReact'}
    ],
    Backend: [
        {title: "Python", description: "Backend Language", icon: 'FaPython '},
        {title: "Java", description: "Object Oriented Programming", icon: 'FaNodeJs'},
        {title: "C#", description: "Backend Language", icon: 'PiFileCSharp'}
    ]
};

const Skills: React.FC = () => {

    const domains = skillsByCategory["Domains"];
    const frontend = skillsByCategory["Frontend"];
    const backend = skillsByCategory["Backend"];

    return (
        <div className="skills-container">
            {/* Domains */}
            <div className="skill-category">
                <h3 className="category-title">Domains</h3>
                <div className="skills-grid">
                {domains.map((skill, index) => (
                    <div key={index} className="skill-card">
                    <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                    <h3 className="skill-name">
                        {skill.title.split('').map((letter: string, i: number) => (
                            <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                            {letter}
                            </span>
                        ))}
                        </h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
                </div>
            </div>
            {/* Frontend */}
            <div className="skill-category">
                <h3 className="category-title">Frontend</h3>
                <div className="skills-grid">
                {frontend.map((skill, index) => (
                    <div key={index} className="skill-card">
                    <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                    <h3 className="skill-name">
                        {skill.title.split('').map((letter: string, i: number) => (
                            <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                            {letter}
                            </span>
                        ))}
                        </h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
                </div>
            </div>
            {/* Backend */}
            <div className="skill-category">
                <h3 className="category-title">Backend</h3>
                <div className="skills-grid">
                {backend.map((skill, index) => (
                    <div key={index} className="skill-card">
                    <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                    <h3 className="skill-name">
                        {skill.title.split('').map((letter: string, i: number) => (
                            <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                            {letter}
                            </span>
                        ))}
                        </h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;