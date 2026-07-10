import { Skill } from '../types';
import raw from '../content/skills.json';

export const skillsByCategory: Record<string, Skill[]> = raw;
