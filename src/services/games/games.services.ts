import { Game } from "../../repository/models/Game";
import * as GamesApi from "../../repository/api/game-api/games.api";
import { Screenshot } from "../../repository/models/Screenshot";

export async function getGames(): Promise<Game[]> {
    return await GamesApi.getGames()
}

export async function getScreenshotsByGameId(gameId: string): Promise<Screenshot[]> {
    return await GamesApi.getScreenshotsByGameId(gameId)
}

export async function getGameById(gameId: string): Promise<Game> {
    return await GamesApi.getGameById(gameId)
}
