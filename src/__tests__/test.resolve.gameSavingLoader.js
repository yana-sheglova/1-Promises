import GameSavingLoader from '../js/gameSavingLoader';

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should load game saving correctly', async () => {
    const saving = await GameSavingLoader.load();
    const correct = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };

    expect(saving).toEqual(correct);
  });
});
