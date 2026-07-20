import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectDetail.css';
import { usePageTitle } from '../../hooks/usePageTitle';
import { projects } from '../../data/projects';
import { techIcons } from '../../data/techIcons';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);

    usePageTitle(project ? project.title : 'Project not found');

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const moreLikeThis = projects.filter((p) => p.slug !== project.slug);

    return (
        <div className="project-detail-container">
            <div className="project-detail-hero">
                <img src={project.image} alt={project.title} className="project-detail-image" />
                <div className="project-detail-hero-overlay" />
            </div>

            <div className="project-detail-body">
                <Link to="/projects" className="project-detail-back">&larr; Back to Projects</Link>

                <h1 className="project-detail-title">{project.title}</h1>

                <div className="project-detail-cast">
                    {project.techUsed.map((tech) => (
                        <span key={tech} className="tech-badge">
                            {techIcons[tech] || "🔧"} {tech}
                        </span>
                    ))}
                </div>

                <p className="project-detail-synopsis">{project.longDescription}</p>

                <div className="project-detail-links">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} GitHub repository`}>
                            <FaGithub /> Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} ${project.liveUrlLabel ?? 'live site'}`}>
                            <FaExternalLinkAlt /> {project.liveUrlLabel ?? 'Live'}
                        </a>
                    )}
                </div>

                {moreLikeThis.length > 0 && (
                    <div className="project-detail-more">
                        <h2 className="project-detail-more-title">More Like This</h2>
                        <div className="project-detail-more-row">
                            {moreLikeThis.map((p) => (
                                <Link key={p.slug} to={`/projects/${p.slug}`} className="project-detail-more-card">
                                    <img src={p.image} alt={p.title} />
                                    <span>{p.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
