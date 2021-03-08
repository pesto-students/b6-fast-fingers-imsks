import React from "react";
import { mount, shallow } from "enzyme";
import ScoreCard from "../ScoreCard";

describe("Component Rendering Tests", () => {
  it("1. Props are passed properly #1 -> scoreValues", () => {
    const scoreValues = [];

    const wrapper = mount(<ScoreCard scoreValues={scoreValues} />);
    expect(wrapper.props().scoreValues).toEqual(scoreValues);
  });
});
