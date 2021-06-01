/* Simplified clone of jest expect function */
const expect = (value) => ({
  toBe: (exp) => {
    if (value === exp) {
      console.log('Success');
    } else {
      console.error(`Error: Value is ${value}, but expectation is ${exp}`);
    }
  },
});

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = { sum, nativeNull };
