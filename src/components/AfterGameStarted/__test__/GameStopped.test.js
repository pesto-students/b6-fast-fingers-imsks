import React, { useState as useStateMock } from "react";
import { mount, shallow } from "enzyme";
import GameStopped from "../GameStopped";

describe("Component Rendering Tests", () => {
  it("1. Props are passed properly #1 -> scoreValues", () => {
    const scoreValues = [];

    const wrapper = mount(<GameStopped scoreValues={scoreValues} />);
    expect(wrapper.props().scoreValues).toEqual(scoreValues);
  });

  it("2. scoreValues is an array", () => {
    const scoreValues = [];

    const wrapper = mount(<GameStopped scoreValues={scoreValues} />);
    expect(wrapper.props().scoreValues).toEqual([]);
  });

  it("3. handleRestartGame rendering", () => {
    const scoreValues = [];

    const props = { handleRestartGame: jest.fn(), scoreValues };
    const wrapperForGameStopped = shallow(
      <GameStopped {...props}></GameStopped>
    );

    const divForHandleRestart = (
      <div
        className="app__container__game__container__gameended__action"
        onClick={props.handleRestartGame}
      >
        <button className="app__container__game__container__gameended__action__button">
          <img
            src="assets/images/restart.png"
            className="app__container__game__container__gameended__action__button__image"
            alt="restart button"
          />
          Restart Game
        </button>
      </div>
    );

    expect(wrapperForGameStopped.find(divForHandleRestart)).toBeTruthy();
  });
});
