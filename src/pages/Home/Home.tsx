import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicks';
import { getProfile, setStoredProfile } from '../../data/profiles';
import { usePageTitle } from '../../hooks/usePageTitle';

const ProfilePage: React.FC = () => {
    const { profileName } = useParams<{ profileName: string }>();
    const profile = getProfile(profileName);
    usePageTitle('Home');

    useEffect(() => {
        setStoredProfile(profile.name);
    }, [profile.name]);

    return (
        <>
        <div
            className="profile-page"
            style={{ backgroundImage: `url(${profile.backgroundGif})` }}
        >
            <ProfileBanner profile={profile.name} />
        </div>
        <TopPicksRow profile={profile.name} />
        </>
    );
};

export default ProfilePage;
