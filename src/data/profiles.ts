import blueImage from '../assets/blue_profile.png';
import greyImage from '../assets/grey_profile.png';

export type ProfileType = 'recruiter' | 'developer';

export interface Profile {
    name: ProfileType;
    image: string;
    backgroundGif: string;
}

export const profiles: Profile[] = [
    {
        name: 'recruiter',
        image: blueImage,
        backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif', // Dark storm clouds
    },
    {
        name: 'developer',
        image: greyImage,
        backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif', // Flickering neon lights
    },
];

const STORAGE_KEY = 'selectedProfile';

export const getStoredProfile = (): ProfileType => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'recruiter' || stored === 'developer' ? stored : 'recruiter';
};

export const setStoredProfile = (name: ProfileType) => {
    localStorage.setItem(STORAGE_KEY, name);
};

export const getProfile = (name: string | undefined): Profile => {
    return profiles.find(p => p.name === name) ?? profiles[0];
};
