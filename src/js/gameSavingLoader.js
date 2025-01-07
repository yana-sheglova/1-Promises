import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((jsonData) => {
        const parsedData = JSON.parse(jsonData);
        return new GameSaving(parsedData.id, parsedData.created, parsedData.userInfo);
      })
      .then((saving) => saving)
      .catch((error) => {
        throw new Error(`Failed to load game saving: ${error.message}`);
      });
  }
}
