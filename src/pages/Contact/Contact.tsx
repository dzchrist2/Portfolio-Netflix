import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { usePageTitle } from '../../hooks/usePageTitle';
import { getProfile, getStoredProfile } from '../../data/profiles';

const badgeCopy = {
    recruiter: "Results-driven software developer with a computer science degree from Barrett Honors College at ASU, looking for a team building cutting-edge products in AI, data science, or web development.",
    developer: "Full stack developer working across React/TypeScript, Python, and ML tooling. Code, experiments, and write-ups live on GitHub.",
};

const ContactMe: React.FC = () => {
    usePageTitle('Contact');
    const profile = getProfile(getStoredProfile());

    return (
        <div className="contact-container">
        <div className="linkedin-badge-custom">
            {/* Placeholder avatar — swap for a real photo */}
            <img src={profile.image} alt="Drew Christner" className="badge-avatar" />
                <div className="badge-content">
                <h3 className="badge-name">Drew Christner</h3>
                <p className="badge-description">
                    {badgeCopy[profile.name]}
                </p>
                <p className="badge-company">Arizona State University</p>
                <a
                    href='https://www.linkedin.com/in/drewzc/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-link"
                >
                    <FaLinkedin className="linkedin-icon" /> View Profile
                </a>
            </div>
        </div>
        <div className="contact-header">
            <p></p>
        </div>
        <div className="contact-details">
            <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href='mailto:drewzchristner@gmail.com' target='_blank' className="contact-link">
                    drewzchristner@gmail.com
                </a>
            </div>
            <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <a href={`tel:602-300-4452`} className="contact-link">
                    602-300-4452
                </a>
            </div>
        </div>
        </div>
    );
};

export default ContactMe;
