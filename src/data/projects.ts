import { Project } from '../types';
import raw from '../content/projects.json';
import capsuleNetworkImg from '../assets/projects/capsule-network.svg';
import astroSeedImg from '../assets/projects/astro-seed.svg';
import eitResearchImg from '../assets/projects/eit-research.svg';
import portfolioNetflixImg from '../assets/projects/portfolio-netflix.svg';

// Images are bundled Vite assets and can't be referenced by path from JSON,
// so JSON content carries an `imageKey` that maps to the imported asset here.
const images: Record<string, string> = {
    capsuleNetwork: capsuleNetworkImg,
    astroSeed: astroSeedImg,
    eitResearch: eitResearchImg,
    portfolioNetflix: portfolioNetflixImg,
};

type ProjectContent = Omit<Project, 'image'> & { imageKey: string };

export const projects: Project[] = (raw as ProjectContent[]).map(({ imageKey, ...rest }) => ({
    ...rest,
    image: images[imageKey],
}));
