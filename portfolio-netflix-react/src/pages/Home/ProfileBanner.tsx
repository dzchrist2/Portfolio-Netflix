//import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../../components/PlayButton/PlayButton';
import InfoButton from '../../components/InfoButton/InfoButton';
// import { getProfileBanner } from '../queries/getProfileBanner';
// import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)

    // const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

    // useEffect(() => {
    //     async function fetchData() {
    //     const data = await getProfileBanner();
    //     setBannerData(data);
    //     }
    //     fetchData();
    // }, []);

    // if (!bannerData) return <div>Loading...</div>;

    // const handlePlayClick = () => {
    //     window.open(bannerData.resumeLink.url, '_blank');
    // };

    // const handleLinkedinClick = () => { 
    //     window.open(bannerData.linkedinLink, '_blank');
    // }

    return (
        <div className="profile-banner">
            <div className="banner-content">
                {/* <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1> */}
                <h1 className="banner-headline" id='headline'>Drew Christner</h1>
                <p className="banner-description">
                    {/* {bannerData.profileSummary} */}
                    Dedicated, results driven developer. Recent computer science graduate from Barrett Honors College at Arizona State University. Experienced in full stack web development, machine learning, and artificial intelligence. I bring a strong foundation of technical skills which can be applied to various positions with little training. My dedication to learning and self improvement has contributed to my continued growth in technical skills since my graduation as I seek employment in the industry. I am looking for a job with a strong team working on cutting edge projects in the field of AI, data science, or web development.  
                </p>

                <div className="banner-buttons">
                    {/* <PlayButton onClick={handlePlayClick} label="Resume" /> */}
                    <PlayButton onClick={onClickUrl("https://www.linkedin.com/in/drewzc/")} label="Resume" />
                    {/* <InfoButton onClick={handleLinkedinClick} label="Linkedin" /> */}
                    <InfoButton onClick={onClickUrl("https://www.linkedin.com/in/drewzc/")} label="Linkedin" />
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;
