import React from "react";
import { mount } from "enzyme";
import StopGame from "../StopGame";

describe("Component Rendering Tests", () => {
  it("1. Props are passed properly #1 -> handleStopGame", () => {
    const props = { handleStopGame: jest.fn() };
    const wrapperForStopGame = mount(<StopGame {...props}></StopGame>);
    expect(typeof wrapperForStopGame.props().handleStopGame).toEqual(
      "function"
    );
  });
});
