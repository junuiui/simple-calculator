import { expect, test, describe } from 'vitest';
import { add, subtract, multiply, divide, power } from './math.calculation';

describe('Calculator Operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('substracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('calculates 2 to the power of 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });
});