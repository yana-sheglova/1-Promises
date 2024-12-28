import read from '../js/reader';

describe('read', () => {
  test('should return ArrayBuffer from JSON string', async () => {
    const buffer = await read();
    const view = new Uint16Array(buffer);
    const chars = Array.from(view).map((char) => String.fromCharCode(char)).join('');
    expect(chars).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });
});
