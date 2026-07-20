export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    techUsed: string[];
    githubUrl?: string;
    liveUrl?: string;
    liveUrlLabel?: string;
}

export interface ExperienceItem {
    name: string;
    title: string;
    timelineType: 'work' | 'school';
    dateRange: string;
    summaryPoints: string[];
}

export interface Skill {
    title: string;
    description: string;
    icon: string;
}

export interface Certification {
    title: string;
    issuer: string;
    issuedDate: string;
    iconName: string;
    link: string;
}

export interface BannerContent {
    headline: string;
    description: string;
    resumeUrl: string;
    linkedinUrl: string;
    githubUrl?: string;
}
