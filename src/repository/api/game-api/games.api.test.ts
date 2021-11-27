import * as GameApi from '../game-api/games.api';

describe('/games', () => {
    it('should be return a games list', async () => {
        const gamesReturned = await GameApi.getGames();

        expect(gamesReturned).not.toBeNull();
    });
})
