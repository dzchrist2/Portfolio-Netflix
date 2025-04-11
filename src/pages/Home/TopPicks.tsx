import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicks.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer';

interface TopPicksProps {
    profile: ProfileType;
}

const topPicksConfig = {
    recruiter: [
        
        { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
        { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", icon: <FaBriefcase />, route: "/experience" },
        { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
        { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
        { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", icon: <FaEnvelope />, route: "/contact-me" },
    ],
    developer: [
        { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
        { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects", icon: <FaProjectDiagram /> },
        { title: "Certifications", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications", icon: <FaCertificate /> },
        { title: "Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/experience", icon: <FaBriefcase /> },
        { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> }
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
