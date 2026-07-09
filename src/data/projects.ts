import { Project } from '../types';
import capsuleNetworkImg from '../assets/projects/capsule-network.svg';
import astroSeedImg from '../assets/projects/astro-seed.svg';
import eitResearchImg from '../assets/projects/eit-research.svg';
import portfolioNetflixImg from '../assets/projects/portfolio-netflix.svg';

export const projects: Project[] = [
    {
        title: "Capsule Network Research",
        description: "Independent research project exploring capsule networks as an alternative to CNNs for image classification, evaluating their ability to preserve spatial hierarchies and pose information between features.",
        image: capsuleNetworkImg,
        techUsed: ["Python", "TensorFlow"],
        githubUrl: "https://github.com/dzchrist2",
    },
    {
        title: "Astro Seed — Crop Health Classifier",
        description: "A machine learning model that classifies crop health from leaf imagery to help identify plant disease early, built as part of an agriculture-tech research effort.",
        image: astroSeedImg,
        techUsed: ["Python", "TensorFlow", "PyTorch"],
        githubUrl: "https://github.com/dzchrist2",
    },
    {
        title: "EIT Research — Arduino Sensing Device",
        description: "Designed and built an Arduino-based sensing device as part of Electrical Impedance Tomography (EIT) research, handling signal acquisition and low-level firmware.",
        image: eitResearchImg,
        techUsed: ["Arduino", "C++", "Python"],
        githubUrl: "https://github.com/dzchrist2",
    },
    {
        title: "Portfolio-Netflix (This Site)",
        description: "A Netflix-styled personal portfolio site built with React, TypeScript, and Vite — profile selection, animated landing page, and content pages themed as a streaming catalog.",
        image: portfolioNetflixImg,
        techUsed: ["React", "TypeScript", "Vite"],
        githubUrl: "https://github.com/dzchrist2/Portfolio-Netflix",
        liveUrl: "https://drewzc.me",
    },
];
