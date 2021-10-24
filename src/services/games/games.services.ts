import { Game } from "../../repository/models/Game";
import * as GamesApi from "../../repository/games.api";

export async function getGames(): Promise<Game[]> {
    return await GamesApi.getGames()
}

export async function getGameById(gameId: string): Promise<Game> {
    return await GamesApi.getGameById(gameId)
}
