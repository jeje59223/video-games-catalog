import axios from 'axios';
import { Game } from "./models/Game";
require('dotenv').config();
const RAWG_API_KEY = process.env.RAWG_API_KEY;

const ENDPOINT = 'https://api.rawg.io/api';

export async function getGames(): Promise<Game[]> {
    const response = await axios.get<Game[]>(
        `${ENDPOINT}/games?key=${RAWG_API_KEY}`
    );
    return response.data;
}
