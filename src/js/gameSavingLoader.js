import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);

      return JSON.parse(jsonData);
    } catch (error) {
      throw new Error('Error loading game saving');
    }
  }
}
