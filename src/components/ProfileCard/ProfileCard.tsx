import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
    name: string;
    image: string;
    onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, onClick }) => {
    return (
        <button type="button" className="profile-card" onClick={onClick} aria-label={`Continue as ${name}`}>
        <div className="image-container">
            <img src={image} alt="" className="profile-image" />
        </div>
        <h3 className="profile-name">{name}</h3>
        </button>
    );
};

export default ProfileCard;
