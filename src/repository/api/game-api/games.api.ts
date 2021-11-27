import axios from 'axios';
import { Game } from "../../models/Game";
import { Screenshot } from "../../models/Screenshot";
require('dotenv').config();
const RAWG_API_KEY = process.env.RAWG_API_KEY;

const ENDPOINT = 'https://api.rawg.io/api';

export async function getGames(): Promise<Game[]> {
    const response = await axios.get<Game[]>(
        `${ENDPOINT}/games?key=${RAWG_API_KEY}`
    );
    return response.data;
}

export async function getScreenshotsByGameId(gameId: Game['id']): Promise<Screenshot[]> {
    const response = await axios.get<Screenshot[]>(
        `${ENDPOINT}/games/${gameId}/screenshots?key=${RAWG_API_KEY}`
    );
    return response.data;
}

export async function getGameById(gameId: Game['id']): Promise<Game> {
    const response = await axios.get<Game>(
        `${ENDPOINT}/games/${gameId}?key=${RAWG_API_KEY}`
    );
    return response.data;
}
