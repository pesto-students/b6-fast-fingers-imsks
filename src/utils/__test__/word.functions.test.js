import { getNextWordForALevel } from "../word.functions";

describe(`Word Function Tests`, () => {
  it(`1. Testing 'getNextWordForALevel' #1 Returned data type`, () => {
    expect(typeof getNextWordForALevel("Easy")).toBe("string");
    expect(typeof getNextWordForALevel("Medium")).toBe("string");
    expect(typeof getNextWordForALevel("Hard")).toBe("string");
  });

  it(`1. Testing 'getNextWordForALevel' #2 Returned data type`, () => {
    expect(typeof getNextWordForALevel({})).toBe("undefined");
    expect(typeof getNextWordForALevel([])).toBe("undefined");
    expect(typeof getNextWordForALevel(["a", "b", 1, 2])).toBe("undefined");
    expect(typeof getNextWordForALevel(Infinity)).toBe("undefined");
  });
});
