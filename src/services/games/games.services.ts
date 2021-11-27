import { Game } from "../../repository/models/Game";
import * as GamesApi from "../../repository/api/game-api/games.api";
import { Screenshot } from "../../repository/models/Screenshot";

export async function getGames(): Promise<Game[]> {
    return GamesApi.getGames()
}

export async function getScreenshotsByGameId(gameId: Game['id']): Promise<Screenshot[]> {
    return GamesApi.getScreenshotsByGameId(gameId)
}

export async function getGameById(gameId: Game['id']): Promise<Game> {
    return GamesApi.getGameById(gameId)
}
