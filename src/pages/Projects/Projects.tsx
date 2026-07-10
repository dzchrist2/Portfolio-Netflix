import React, {JSX} from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaExternalLinkAlt, FaMicrochip } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiTypescript, SiVite, SiTensorflow, SiCplusplus } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import { usePageTitle } from '../../hooks/usePageTitle';
import { projects } from '../../data/projects';

const techIcons: { [key: string]: JSX.Element } = {
    "ReactJS": <FaReact />,
    "React": <FaReact />,
    "TypeScript": <SiTypescript />,
    "Vite": <SiVite />,
    "NodeJS": <FaNodeJs />,
    "AWS": <FaAws />,
    "PostgreSQL": <SiPostgresql />,
    "MongoDB": <SiMongodb />,
    "Ruby On Rails": <SiRubyonrails />,
    "Material UI": <SiMaterialdesign />,
    "HTML5": <SiHtml5 />,
    "CSS3": <SiCss3 />,
    "jQuery": <SiJquery />,
    "AWS-ECS": <SiAwsamplify />,
    'Cognito': <FaAws />,
    'Lambda': <FaAws />,
    'ECS': <FaAws />,
    'Jenkins': <FaJenkins />,
    'Docker': <FaDocker />,
    'GraphQL': <FaDatabase />,
    'CI/CD': <FaGitlab />,
    'GitLab': <FaGitlab />,
    'GitHub': <FaGithub />,
    'Heroku': <GrDeploy />,
    'Netlify': <GrDeploy />,
    'Firebase': <SiFirebase />,
    'GCP': <FaGoogle />,
    'Azure': <FaMicrosoft />,
    'Kubernetes': <GrKubernetes />,
    'Terraform': <SiTerraform />,
    'ArgoCD': <SiArgo />,
    'Java': <FaJava />,
    'Spring Boot': <FaJava />,
    'Python': <FaPython />,
    'TensorFlow': <SiTensorflow />,
    'PyTorch': <SiTensorflow />,
    'Arduino': <FaMicrochip />,
    'C++': <SiCplusplus />,
    'Node.js': <FaNodeJs />,
    'Express.js': <FaNodeJs />,
    'Hibernate': <FaJava />,
    'Maven': <FaJava />,
    'Gradle': <FaJava />,
    'JUnit': <FaJava />,
    'Mockito': <FaJava />,
    'Jest': <FaReact />,
    'Angular': <FaAngular />,
    'Vue.js': <FaVuejs />,
    'Next.js': <FaReact />,
    'Gatsby': <FaReact />,
    'Nuxt.js': <FaVuejs />,
    'Redux': <FaReact />,
    'Vuex': <FaVuejs />,
    'Tailwind CSS': <SiCss3 />,
    'Bootstrap': <SiCss3 />,
    'JQuery': <SiJquery />,
};

const Projects: React.FC = () => {
    usePageTitle('Projects');
    return (
        <div className="projects-container">
        <div className="projects-grid">
            {projects.map((project, index) => (
            <div
                key={project.title}
                className="project-card"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-used">
                    {project.techUsed.map((tech) => (
                    <span key={tech} className="tech-badge">
                        {techIcons[tech] || "🔧"} {tech}
                    </span>
                    ))}
                </div>
                <div className="project-links">
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
