import { BannerContent } from '../types';
import { ProfileType } from './profiles';
import raw from '../content/banner.json';

export const banners: Record<ProfileType, BannerContent> = raw;
