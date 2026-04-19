const { add } = require('./math');

test('should add two numbers', () => {
  expect(add(2, 3)).toBe(6);
});