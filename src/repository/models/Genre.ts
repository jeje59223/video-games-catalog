import { Game } from "./Game";

export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    games: Game[]
}
