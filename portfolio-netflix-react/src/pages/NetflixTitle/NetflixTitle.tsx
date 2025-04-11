import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from '../../assets/netflixSound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/Full-Logo_Netflix.png'; // Update with the path to your logo

const NetflixTitle = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const handlePlaySound = () => {
        const audio = new Audio(netflixSound);
        audio.play().catch(error => console.error("Audio play error:", error));
        setIsClicked(true); // Starts animation after clicking
    };

    useEffect(() => {
        if (isClicked) {
        const timer = setTimeout(() => {
            navigate('/profiles');
        }, 4000);
        return () => clearTimeout(timer);
        }
    }, [isClicked, navigate]);

    return (
        <div className="netflix-container" onClick={handlePlaySound}>
        <img 
            src={logoImage} 
            alt="Custom Logo" 
            className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
        />
        </div>
    );
};

export default NetflixTitle;
