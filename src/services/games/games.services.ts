import { Game } from "../../repository/models/Game";
import * as GamesApi from "../../repository/api/game-api/games.api";
import { Screenshot } from "../../repository/models/Screenshot";
import * as dayjs from "dayjs";

export async function getGames(): Promise<Game[]> {
    return GamesApi.getGames()
}

export async function getScreenshotsByGameId(gameId: Game['id']): Promise<Screenshot[]> {
    return GamesApi.getScreenshotsByGameId(gameId)
}

export async function getGameById(gameId: Game['id']): Promise<Game> {
    return GamesApi.getGameById(gameId)
}

export async function getBestGamesOfTheMonth(): Promise<Game[]> {
    const firstDayOfMonth = '01';
    const lastDayOfMonth = dayjs().daysInMonth().toString();
    const yearAndMonth = dayjs().format('YYYY-MM').toString();
    const beginningOfTheMonth = `${yearAndMonth}-${firstDayOfMonth}`;
    const endOfTheMonth = `${yearAndMonth}-${lastDayOfMonth}`;

    return GamesApi.getBestGamesOfTheMonth(beginningOfTheMonth, endOfTheMonth)
}
