import React, { JSX } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { HiAcademicCap } from "react-icons/hi2";
const iconData: { [key: string]: JSX.Element } = {
    'school' : <HiAcademicCap />,
    'udemy': <SiUdemy />,
    'coursera': <SiCoursera />,
    'ieee': <SiIeee />,
    'university': <FaUniversity />
}

const Certifications: React.FC = () => {

    const certifications = [
        {
            title: "HTML & CSS Specialist",
            issuer: "ASU Global Tech Experience",
            issuedDate: "July 1, 2022",
            iconName: "school",
            link: "https://www.credential.net/5aba67ee-140a-4c00-a510-2e064cd6adfe#acc.We8FijLx"
        },
        {
            title: "JavaScript & API Specialist",
            issuer: "ASU Global Tech Experience",
            issuedDate: "August 12, 2022",
            iconName: "school",
            link: "https://www.credential.net/164a50b0-ef8d-4c10-b1c6-4bd14746b035#acc.dtTBPQAw"
        },
        {
            title: "Intercultural Skills",
            issuer: "ASU Global Tech Experience",
            issuedDate: "August 17, 2022",
            iconName: "school",
            link: "https://www.credential.net/d8822b5d-3185-45f0-9a6d-4ec10c39fa0a#acc.JUjGCw5X"
        },
        {
            title: "Web Development Track Completion",
            issuer: "ASU Global Tech Experience",
            issuedDate: "August 13, 2022",
            iconName: "school",
            link: "https://www.credential.net/da0fd1d4-0978-4f56-90c2-45a714c84534#acc.zUoR14KF"
        }
    ]

    return (
        <div className="certifications-container">
        <div className="certifications-grid">
            {certifications.map((cert, index) => (
            <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
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
