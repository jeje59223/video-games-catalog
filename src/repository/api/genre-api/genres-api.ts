import axios from 'axios';
import { Genre } from "../../models/Genre";
require('dotenv').config();
const RAWG_API_KEY = process.env.RAWG_API_KEY;

const ENDPOINT = 'https://api.rawg.io/api';

export async function getGenres(): Promise<Genre[]> {
    const response = await axios.get<Genre[]>(
        `${ENDPOINT}/genres?key=${RAWG_API_KEY}`
    );
    return response.data;
}
