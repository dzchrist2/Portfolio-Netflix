import React from 'react';
import './Contact.css';
import profilePic from '../../assets/blue_profile.png';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const ContactMe: React.FC = () => {

    
    return (
        <div className="contact-container">
        <div className="linkedin-badge-custom">
            <img src={profilePic} alt="Drew Christner" className="badge-avatar" />
                <div className="badge-content">
                <h3 className="badge-name">Drew Christner</h3>
                {/* <p className="badge-title">{userData.title}</p> */}
                <p className="badge-description">
                    Junior developer with strong technical knowledge and a passion for technology
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
