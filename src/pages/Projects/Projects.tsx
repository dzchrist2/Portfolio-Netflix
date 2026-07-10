import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { usePageTitle } from '../../hooks/usePageTitle';
import { projects } from '../../data/projects';
import { techIcons } from '../../data/techIcons';

const Projects: React.FC = () => {
    usePageTitle('Projects');
    return (
        <div className="projects-container">
        <div className="projects-grid">
            {projects.map((project, index) => (
            <div
                key={project.slug}
                className="project-card"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
                <Link to={`/projects/${project.slug}`} className="project-image-link">
                    <img src={project.image} alt={project.title} className="project-image" />
                </Link>
                <div className="project-details">
                <h3>
                    <Link to={`/projects/${project.slug}`} className="project-title-link">{project.title}</Link>
                </h3>
                <p>{project.description}</p>
                <div className="tech-used">
                    {project.techUsed.map((tech) => (
                    <span key={tech} className="tech-badge">
                        {techIcons[tech] || "🔧"} {tech}
                    </span>
                    ))}
                </div>
                <div className="project-links">
                    <Link to={`/projects/${project.slug}`} className="project-link">
                        More Info
                    </Link>
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} GitHub repository`}>
                            <FaGithub /> Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} live site`}>
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;
