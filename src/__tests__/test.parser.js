import json from '../js/parser';

describe('json', () => {
  test('should parse ArrayBuffer to string', async () => {
    const data = new Uint16Array([72, 101, 108, 108, 111]);
    const result = await json(data.buffer);
    expect(result).toBe('Hello');
  });

  test('should handle empty ArrayBuffer', async () => {
    const data = new Uint16Array();
    const result = await json(data.buffer);
    expect(result).toBe('');
  });
});
