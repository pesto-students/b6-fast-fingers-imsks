import React from "react";
import { mount } from "enzyme";
import Score from "../Score";
import { showGlobalTimer } from "../../../utils/timer.functions";

describe("Component Rendering Tests", () => {
  it("1. Props are passed properly #1 -> showGlobalTimer", () => {
    const wrapper = mount(<Score showGlobalTimer={showGlobalTimer} />);
    expect(wrapper.props().showGlobalTimer).toEqual(showGlobalTimer);
  });
});
