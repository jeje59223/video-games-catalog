import { Game } from './Game';

export interface Platform {
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image: string;
    year_start: number;
    year_end: number;
    games: Game[];
}
