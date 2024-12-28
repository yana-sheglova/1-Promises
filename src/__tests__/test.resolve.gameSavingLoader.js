import read from '../js/reader';
import json from '../js/parser';
import GameSaving from '../js/gameSaving';
import GameSavingLoader from '../js/gameSavingLoader';

jest.mock('../js/reader');
jest.mock('../js/parser');

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should load game saving correctly', async () => {
    const mockData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

    read.mockImplementation(() => {
      const buffer = new ArrayBuffer(mockData.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < mockData.length; i += 1) {
        bufferView[i] = mockData.charCodeAt(i);
      }
      return Promise.resolve(buffer);
    });
    json.mockImplementation((data) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      }, 500);
    }));

    const correct = await GameSavingLoader.load();

    expect(correct).toBeInstanceOf(GameSaving);
    expect(correct.id).toBe(9);
    expect(correct.created).toBe(1546300800);
    expect(correct.userInfo).toEqual({
      id: 1, name: 'Hitman', level: 10, points: 2000,
    });
  });
});
