import GameSavingLoader from '../js/gameSavingLoader';

describe('GameSavingLoader', () => {
  test('GameSavingLoader loads saving successfully', async () => {
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

  test('GameSavingLoader throws error on load failure', (done) => {
    const err = GameSavingLoader.load();
    expect(err).rejects.toThrow('Error loading game saving');
    done();
  });
});
