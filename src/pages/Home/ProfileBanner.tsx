import './ProfileBanner.css';
import { FaGithub } from 'react-icons/fa';
import PlayButton from '../../components/PlayButton/PlayButton';
import InfoButton from '../../components/InfoButton/InfoButton';
import { banners } from '../../data/banner';
import { ProfileType } from '../../data/profiles';

interface ProfileBannerProps {
    profile: ProfileType;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ profile }) => {
    const banner = banners[profile];

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)

    return (
        <div className="profile-banner">
            <div className="banner-content">
                <h1 className="banner-headline" id='headline'>{banner.headline}</h1>
                <p className="banner-description">
                    {banner.description}
                </p>

                <div className="banner-buttons">
                    {profile === 'developer' && banner.githubUrl ? (
                        <>
                            <PlayButton onClick={onClickUrl(banner.githubUrl)} label="GitHub" icon={<FaGithub size={24} color="black" />} />
                            <InfoButton onClick={onClickUrl(banner.resumeUrl)} label="Resume" />
                        </>
                    ) : (
                        <>
                            <PlayButton onClick={onClickUrl(banner.resumeUrl)} label="Resume" />
                            <InfoButton onClick={onClickUrl(banner.linkedinUrl)} label="Linkedin" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;
