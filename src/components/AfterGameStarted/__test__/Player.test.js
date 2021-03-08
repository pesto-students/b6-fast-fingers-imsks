import React from "react";
import { mount } from "enzyme";
import Player from "../Player";

describe("Component Rendering Tests", () => {
  it("1. Props are passed properly #1 -> name", () => {
    const wrapper = mount(<Player name={"Sachin"} />);
    expect(wrapper.props().name).toEqual("Sachin");
  });

  it(`1. Props are passed properly #1 -> currentLevel === ["Easy", "Medium", "Hard"]`, () => {
    const expectedValuesForCurrentLevel = ["Easy", "Medium", "Hard"];

    const wrapperForEasy = mount(<Player currentLevel="Easy" />);
    expect(expectedValuesForCurrentLevel).toEqual(
      expect.arrayContaining([wrapperForEasy.props().currentLevel])
    );

    const wrapperForMedium = mount(<Player currentLevel="Medium" />);
    expect(expectedValuesForCurrentLevel).toEqual(
      expect.arrayContaining([wrapperForMedium.props().currentLevel])
    );

    const wrapperForHard = mount(<Player currentLevel="Hard" />);
    expect(expectedValuesForCurrentLevel).toEqual(
      expect.arrayContaining([wrapperForHard.props().currentLevel])
    );
  });
});
