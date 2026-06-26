import { describe, expect, test } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  test('adds numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
