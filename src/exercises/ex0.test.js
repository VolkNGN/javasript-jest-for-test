const fizz_buzz = require('./ex0');

describe("FizzBuzz", () => {
  test('[3] should result in "fizz"', () => {
    expect(fizz_buzz("aaa", "a")).toBe(true);
  });
  test('[3] should result in "fizz"', () => {
    expect(fizz_buzz("aaa", "b")).toBe(false);
  });

   

});