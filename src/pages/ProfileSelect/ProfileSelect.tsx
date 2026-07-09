import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { profiles, setStoredProfile, Profile } from '../../data/profiles';
import './ProfileSelect.css';
import { usePageTitle } from '../../hooks/usePageTitle';

const Browse: React.FC = () => {
    const navigate = useNavigate();
    usePageTitle('Who\'s Watching?');

    const handleProfileClick = (profile: Profile) => {
        setStoredProfile(profile.name);
        navigate(`/profile/${profile.name}`);
    };

    return (
        <div className="browse-container">
        <p className='who-is-watching'>Who's Watching?</p>
        <div className="profiles">
            {profiles.map((profile) => (
            <ProfileCard
                key={profile.name}
                name={profile.name}
                image={profile.image}
                onClick={() => handleProfileClick(profile)}
            />
            ))}
        </div>
        </div>
    );
};

export default Browse;
