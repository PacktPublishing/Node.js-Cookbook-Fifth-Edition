const { lowercase, uppercase, capitalize } =
require('./textUtils');

describe('textUtils', () => {
  test('converts "HELLO WORLD" to all lowercase', () => {
    expect(lowercase('HELLO WORLD')).toBe('hello world');
  });
  // Test for uppercase function
  test('converts "hello world" to all uppercase', () => {
    expect(uppercase('hello world')).toBe('HELLO WORLD');
  });
  test('capitalizes the first letter of "hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
