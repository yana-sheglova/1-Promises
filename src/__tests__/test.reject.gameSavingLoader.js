import read from '../js/reader';
import GameSavingLoader from '../js/gameSavingLoader';

jest.mock('../js/reader');
jest.mock('../js/parser');

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should handle errors when loading game saving', async () => {
    read.mockImplementation(() => Promise.reject(new Error('Read error')));

    await expect(GameSavingLoader.load()).rejects.toThrow('Failed to load game saving: Read error');
  });
});
