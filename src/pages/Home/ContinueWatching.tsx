import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import certificationsCard from '../../assets/cards/certifications.svg';
import contactCard from '../../assets/cards/contact.svg';

type ProfileType = 'recruiter' | 'developer';

interface ContinueWatchingProps {
    profile: ProfileType;
}

const continueWatchingConfig = {
    recruiter: [
        { title: "Certifications", imgSrc: certificationsCard, link: "/certifications" },
        { title: "Contact Me", imgSrc: contactCard, link: "/contact" }
    ],
    developer: [
        { title: "Certifications", imgSrc: certificationsCard, link: "/certifications" },
        { title: "Contact Me", imgSrc: contactCard, link: "/contact" }
    ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
    const continueWatching = continueWatchingConfig[profile];

    return (
        <div className="continue-watching-row">
        <h2 className="row-title">Continue Watching for {profile}</h2>
        <div className="card-row">
            {continueWatching.map((pick, index) => (
            <Link to={pick.link} key={index} className="pick-card">
                <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
                <div className="overlay">
                <div className="pick-label">{pick.title}</div>
                </div>
            </Link>
            ))}
        </div>
        </div>
    );
};

export default ContinueWatching;
