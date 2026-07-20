import { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from '../../assets/netflixSound.mp3';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../../components/BrandLogo/BrandLogo';

const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const NetflixTitle = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (prefersReducedMotion()) {
            navigate('/profiles', { replace: true });
        }
    }, [navigate]);

    const handleEnter = () => {
        if (isClicked) return;
        const audio = new Audio(netflixSound);
        audio.play().catch(error => console.error("Audio play error:", error));
        setIsClicked(true);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleEnter();
        }
    };

    return (
        <div
            className="netflix-container"
            onClick={handleEnter}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Enter site"
        >
            <BrandLogo
                size="hero"
                className={`netflix-logo ${isClicked ? 'animate' : ''}`}
                onAnimationEnd={(event) => {
                    if (isClicked && event.animationName === 'zoomOut') {
                        navigate('/profiles');
                    }
                }}
            />
            {!isClicked && <p className="netflix-hint">Click anywhere to begin</p>}
            <button
                type="button"
                className="netflix-skip"
                onClick={(event) => {
                    event.stopPropagation();
                    navigate('/profiles');
                }}
            >
                Skip Intro
            </button>
        </div>
    );
};

export default NetflixTitle;
