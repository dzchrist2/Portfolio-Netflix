import './ProfileBanner.css';
import PlayButton from '../../components/PlayButton/PlayButton';
import InfoButton from '../../components/InfoButton/InfoButton';
import { banner } from '../../data/banner';

const ProfileBanner: React.FC = () => {

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
                    <PlayButton onClick={onClickUrl(banner.resumeUrl)} label="Resume" />
                    <InfoButton onClick={onClickUrl(banner.linkedinUrl)} label="Linkedin" />
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;
