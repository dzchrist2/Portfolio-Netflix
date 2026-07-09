import React, { JSX } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { HiAcademicCap } from "react-icons/hi2";
import { usePageTitle } from '../../hooks/usePageTitle';
import { certifications } from '../../data/certifications';
const iconData: { [key: string]: JSX.Element } = {
    'school' : <HiAcademicCap />,
    'udemy': <SiUdemy />,
    'coursera': <SiCoursera />,
    'ieee': <SiIeee />,
    'university': <FaUniversity />
}

const Certifications: React.FC = () => {
    usePageTitle('Certifications');

    return (
        <div className="certifications-container">
        <div className="certifications-grid">
            {certifications.map((cert, index) => (
            <a href={cert.link} key={cert.title} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
                <div className="certification-content">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
                </div>
                <div className="certification-link animated-icon">
                    <FaExternalLinkAlt />
                </div>
            </a>
            ))}
        </div>
        </div>
    );
};

export default Certifications;
