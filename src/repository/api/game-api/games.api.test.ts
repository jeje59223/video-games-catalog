import * as GameApi from '../game-api/games.api';
import game from './test-data/game';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Games', () => {
    it('should be return a games list', async () => {
        mockedAxios.get.mockResolvedValue({ data: [game] });
        const games = await GameApi.getGames();

        expect(games).toEqual([game]);
    });
})
