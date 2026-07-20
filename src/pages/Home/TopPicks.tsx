import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicks.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaPlayCircle } from 'react-icons/fa';
import skillsCard from '../../assets/cards/skills.png';
import experienceCard from '../../assets/cards/experience.png';
import certificationsCard from '../../assets/cards/certifications.png';
import projectsCard from '../../assets/cards/projects.png';
import contactCard from '../../assets/cards/contact.png';
import { ProfileType } from '../../data/profiles';

interface TopPicksProps {
    profile: ProfileType;
}

const topPicksConfig = {
    recruiter: [
        { title: "Skills", subtitle: "Technologies I bring to a team", imgSrc: skillsCard, icon: <FaCode />, route: "/skills" },
        { title: "Experience", subtitle: "Roles, impact, and results", imgSrc: experienceCard, icon: <FaBriefcase />, route: "/experience" },
        { title: "Certifications", subtitle: "Verified credentials", imgSrc: certificationsCard, icon: <FaCertificate />, route: "/certifications" },
        { title: "Projects", subtitle: "Shipped, production-facing work", imgSrc: projectsCard, icon: <FaProjectDiagram />, route: "/projects" },
        { title: "Contact Me", subtitle: "Let's talk about a role", imgSrc: contactCard, icon: <FaEnvelope />, route: "/contact" },
    ],
    developer: [
        { title: "Skills", subtitle: "Languages, frameworks, tools", imgSrc: skillsCard, route: "/skills", icon: <FaCode /> },
        { title: "Projects", subtitle: "Code, repos, and write-ups", imgSrc: projectsCard, route: "/projects", icon: <FaProjectDiagram /> },
        { title: "Certifications", subtitle: "Coursework and credentials", imgSrc: certificationsCard, route: "/certifications", icon: <FaCertificate /> },
        { title: "Experience", subtitle: "Where I've built things", imgSrc: experienceCard, route: "/experience", icon: <FaBriefcase /> },
        { title: "Contact Me", subtitle: "Open an issue, or just say hi", imgSrc: contactCard, route: "/contact", icon: <FaEnvelope /> }
    ]
};


const TopPicksRow: React.FC<TopPicksProps> = ({ profile }) => {
    const navigate = useNavigate();
    const topPicks = topPicksConfig[profile];

    return (
        <div className="top-picks-row">
            <h2 className="row-title">Today's Top Picks for {profile}</h2>
            <div className="card-row">
                {topPicks.map((pick, index) => (
                    <div 
                        key={index} 
                        className="pick-card" 
                        onClick={() => navigate(pick.route)}
                        style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
                    >
                        <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
                        <div className="overlay">
                            <FaPlayCircle className="pick-play-icon" aria-hidden="true" />
                            <div className="pick-label">{pick.title}</div>
                            <div className="pick-subtitle">{pick.subtitle}</div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default TopPicksRow;
