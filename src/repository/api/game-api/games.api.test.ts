import * as GameApi from '../game-api/games.api';
import games from './test-data/games';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Games', () => {
    it('should be return a games list', async () => {
        mockedAxios.get.mockResolvedValue({ data: games });
        const gamesList = await GameApi.getGames();

        expect(gamesList).toEqual(games);
        expect(mockedAxios.get).toBeCalledWith(expect.stringMatching('/games'));
    });
})
