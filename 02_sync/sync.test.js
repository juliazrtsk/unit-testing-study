const Lodash = require('./sync');

const _ = new Lodash();

describe('Lodash: compact', () => {
  let array;

  beforeEach(() => {
    array = [false, 42, 0, 1, '', true, null, 'hello'];
  });

  test('should be defined', () => {
    expect(_.compact).toBeDefined();

    // Other way:
    expect(_.compact).not.toBeUndefined();
  });

  test('should remove falsy values from array', () => {
    const result = [42, 1, true, 'hello'];

    // This test will fail: toBe is for primitives
    // expect(_.compact(arr)).toBe(result);

    expect(_.compact(array)).toEqual(result); // toEqual is for arrays and objects
  });

  test('should not contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain(undefined);
    expect(_.compact(array)).not.toContain(0);
  });
});

describe('Lodash: groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
  });

  test('should group an array items by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test('should group an array items by length', () => {
    const array = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test('should not return an array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });

  test('', () => {});
});
