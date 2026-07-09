import React, {JSX} from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaExternalLinkAlt, FaMicrochip } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiTypescript, SiVite, SiTensorflow } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import capsuleNetworkImg from '../../assets/projects/capsule-network.svg';
import astroSeedImg from '../../assets/projects/astro-seed.svg';
import eitResearchImg from '../../assets/projects/eit-research.svg';
import portfolioNetflixImg from '../../assets/projects/portfolio-netflix.svg';

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
    'C++': <FaDatabase />,
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

interface Project {
    title: string;
    description: string;
    image: { url: string };
    techUsed: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const projectArray: Project[] = [
    {
        title: "Capsule Network Research",
        description: "Independent research project exploring capsule networks as an alternative to CNNs for image classification, evaluating their ability to preserve spatial hierarchies and pose information between features.",
        image: { url: capsuleNetworkImg },
        techUsed: ["Python", "TensorFlow"],
        githubUrl: "https://github.com/dzchrist2",
    },
    {
        title: "Astro Seed — Crop Health Classifier",
        description: "A machine learning model that classifies crop health from leaf imagery to help identify plant disease early, built as part of an agriculture-tech research effort.",
        image: { url: astroSeedImg },
        techUsed: ["Python", "TensorFlow", "PyTorch"],
        githubUrl: "https://github.com/dzchrist2",
    },
    {
        title: "EIT Research — Arduino Sensing Device",
        description: "Designed and built an Arduino-based sensing device as part of Electrical Impedance Tomography (EIT) research, handling signal acquisition and low-level firmware.",
        image: { url: eitResearchImg },
        techUsed: ["Arduino", "C++", "Python"],
        githubUrl: "https://github.com/dzchrist2",
    },
    {
        title: "Portfolio-Netflix (This Site)",
        description: "A Netflix-styled personal portfolio site built with React, TypeScript, and Vite — profile selection, animated landing page, and content pages themed as a streaming catalog.",
        image: { url: portfolioNetflixImg },
        techUsed: ["React", "TypeScript", "Vite"],
        githubUrl: "https://github.com/dzchrist2/Portfolio-Netflix",
        liveUrl: "https://drewzc.me",
    },
];

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
        <div className="projects-grid">
            {projectArray.map((project, index) => (
            <div
                key={project.title}
                className="project-card"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
                <img src={project.image.url} alt={project.title} className="project-image" />
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
