import { Game } from './Game';

export interface Platform {
    name: string;
    nom: string;
    code: string;
    games: Game[];
}
