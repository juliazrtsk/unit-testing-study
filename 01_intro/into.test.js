const { sum, nativeNull } = require('./intro');

describe('Sun function', () => {
  test('should return the sum of two values', () => {
    expect(sum(1, 3)).toBe(4);
  });

  test('should return value correctly comparing to other', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(6);
  });

  test('should sum 2 float values correctly', () => {
    // This test will fail, because 0.1 + 0.2 in JS = 0.30000000000000004
    // expect(sum(0.1, 0.2)).toBe(0.3);

    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);

    // This test will also fail because of precision
    // expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 17);
  });
});

describe('Native null function', () => {
  test('should return null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // falsy values = undefined, null, 0, ''
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).toBe(null);

    // Inversion of matcher
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
