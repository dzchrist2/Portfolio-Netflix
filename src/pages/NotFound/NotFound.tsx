import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <div className="not-found-code">404</div>
            <h1 className="not-found-title">This title isn't available</h1>
            <p className="not-found-message">
                We couldn't find the page you were looking for. It may have been moved, renamed, or never existed.
            </p>
            <button className="not-found-button" onClick={() => navigate('/profiles')}>
                Back to Home
            </button>
        </div>
    );
};

export default NotFound;
