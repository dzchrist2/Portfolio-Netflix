import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicks.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import skillsCard from '../../assets/cards/skills.svg';
import experienceCard from '../../assets/cards/experience.svg';
import certificationsCard from '../../assets/cards/certifications.svg';
import projectsCard from '../../assets/cards/projects.svg';
import contactCard from '../../assets/cards/contact.svg';

type ProfileType = 'recruiter' | 'developer';

interface TopPicksProps {
    profile: ProfileType;
}

const topPicksConfig = {
    recruiter: [
        { title: "Skills", imgSrc: skillsCard, icon: <FaCode />, route: "/skills" },
        { title: "Experience", imgSrc: experienceCard, icon: <FaBriefcase />, route: "/experience" },
        { title: "Certifications", imgSrc: certificationsCard, icon: <FaCertificate />, route: "/certifications" },
        { title: "Projects", imgSrc: projectsCard, icon: <FaProjectDiagram />, route: "/projects" },
        { title: "Contact Me", imgSrc: contactCard, icon: <FaEnvelope />, route: "/contact" },
    ],
    developer: [
        { title: "Skills", imgSrc: skillsCard, route: "/skills", icon: <FaCode /> },
        { title: "Projects", imgSrc: projectsCard, route: "/projects", icon: <FaProjectDiagram /> },
        { title: "Certifications", imgSrc: certificationsCard, route: "/certifications", icon: <FaCertificate /> },
        { title: "Experience", imgSrc: experienceCard, route: "/experience", icon: <FaBriefcase /> },
        { title: "Contact Me", imgSrc: contactCard, route: "/contact", icon: <FaEnvelope /> }
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
                            <div className="pick-label">{pick.title}</div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default TopPicksRow;
