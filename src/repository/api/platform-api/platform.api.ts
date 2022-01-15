import axios from 'axios';
import { Platform } from './models/Platform';
require('dotenv').config();
const RAWG_API_KEY = process.env.RAWG_API_KEY;

const ENDPOINT = 'https://api.rawg.io/api';

export async function getPlatforms(): Promise<Platform[]> {
    const response = await axios.get<Platform[]>(
        `${ENDPOINT}/platforms?key=${RAWG_API_KEY}`
    );
    return response.data;
}

export async function getPlatformId(platformId: Platform['id']): Promise<Platform> {
    const response = await axios.get<Platform>(
        `${ENDPOINT}/platforms/${platformId}?key=${RAWG_API_KEY}`
    );
    return response.data;
}
