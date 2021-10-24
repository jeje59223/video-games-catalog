import { Platform } from './Platform'

export interface Game {
    id: string;
    name: string;
    slug: string;
    released: string;
    background_image: string;
    rating: string;
    platforms: Platform[];
}
