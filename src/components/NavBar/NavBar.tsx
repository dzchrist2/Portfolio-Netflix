import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import './NavBar.css';
import netflixLogo from '../../assets/Full-Logo_Netflix.png';
import { getProfile, getStoredProfile } from '../../data/profiles';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const profileImage = getProfile(getStoredProfile()).image;

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 80);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeSidebar();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-left">
            <Link to="/" className="navbar-logo">
                <img src={netflixLogo} alt="Netflix" />
            </Link>
            <ul className="navbar-links">
                <li><Link to="/profiles">Home</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
            <div className="navbar-right">
            {/* Hamburger menu for mobile */}
                <button
                    type="button"
                    className="hamburger"
                    onClick={toggleSidebar}
                    aria-label="Open menu"
                    aria-expanded={isSidebarOpen}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <button type="button" className="profile-icon-button" onClick={() => navigate('/profiles')} aria-label="Switch profile">
                    <img src={profileImage} alt="" className="profile-icon" />
                </button>
            </div>
        </nav>

        {/* Sidebar Overlay */}
        <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

        {/* Sidebar (only visible on mobile) */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-logo">
            <img src={netflixLogo} alt="Netflix Logo" />
            </div>
            <ul>
            <li><Link to="/profiles" onClick={closeSidebar}><FaHome /> Home</Link></li>
            <li><Link to="/experience" onClick={closeSidebar}><FaBriefcase /> Professional</Link></li>
            <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
            <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
            <li><Link to="/contact" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
            </ul>
        </div>
        </>
    );
};

export default Navbar;
