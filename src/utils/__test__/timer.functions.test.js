import { showGlobalTimer } from "../timer.functions";

describe("Function Tests", () => {
  it("1. showGlobalTimer", () => {
    expect(showGlobalTimer(1)).toEqual("00m : 01s");
    expect(showGlobalTimer(30)).toEqual("00m : 30s");
    expect(showGlobalTimer(300)).toEqual("05m : 00s");
    expect(showGlobalTimer(null)).toEqual(undefined);
    expect(showGlobalTimer(undefined)).toEqual(undefined);
    expect(showGlobalTimer({})).toEqual(undefined);
    expect(showGlobalTimer([])).toEqual(undefined);
  });
});
