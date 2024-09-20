const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 12 * 5 to equal  60', () => {
  expect(calculator.multiply(12, 5)).toBe(60);
});

test('multiply 5 * 0 to equal  0', () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});

test('Divide 6 / 2 to equal  3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('Divide 9 / 0 to equal  infinity', () => {
  expect(calculator.divide(9, 0)).toBe(Infinity);
});