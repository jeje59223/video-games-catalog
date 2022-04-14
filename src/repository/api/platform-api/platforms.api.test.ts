import * as PlatformApi from '../platform-api/platform.api';
import platforms from './test-data/platforms';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Platforms', () => {
    it('should be return a platforms list', async () => {
        mockedAxios.get.mockResolvedValue({ data: platforms });
        const platformsList = await PlatformApi.getPlatforms();

        expect(platformsList).toEqual(platforms)
        expect(mockedAxios.get).toBeCalledWith(expect.stringMatching('/platforms'));
    });
})
