import React from "react";
import { mount } from "enzyme";
import TypingArea from "../TypingArea";

describe("Component Rendering Tests", () => {
  it("1. Props are passed properly", () => {
    const currentTimerValue = "timer value";
    const currentWord = "word";
    const correctWordIndexes = [1, 3, 5];
    const shouldRestartAnimation = false;

    const props = {
      handleTimeOver: jest.fn(),
      currentTimerValue,
      currentWord,
      correctWordIndexes,
      shouldRestartAnimation,
      setCorrectWordIndexes: jest.fn(),
      setCurrentDifficulty: jest.fn(),
      setShouldRestartAnimation: jest.fn(),
    };

    const wrapper = mount(<TypingArea {...props} />);
    expect(wrapper.props().handleTimeOver).toEqual(props.handleTimeOver);
    expect(wrapper.props().currentTimerValue).toEqual("timer value");
    expect(wrapper.props().currentWord).toEqual("word");
    expect(wrapper.props().correctWordIndexes).toEqual([1, 3, 5]);
    expect(wrapper.props().shouldRestartAnimation).toEqual(false);
    expect(wrapper.props().setCorrectWordIndexes).toEqual(
      props.setCorrectWordIndexes
    );
    expect(wrapper.props().setCurrentDifficulty).toEqual(
      props.setCurrentDifficulty
    );
    expect(wrapper.props().setShouldRestartAnimation).toEqual(
      props.setShouldRestartAnimation
    );
  });

  it("2. shouldRestartAnimation as false then no rendering of main timer SVG", () => {
    const currentTimerValue = "timer value";
    const currentWord = "word";
    const correctWordIndexes = [1, 3, 5];
    const shouldRestartAnimation = true;

    const props = {
      handleTimeOver: jest.fn(),
      currentTimerValue,
      currentWord,
      correctWordIndexes,
      shouldRestartAnimation,
      setCorrectWordIndexes: jest.fn(),
      setCurrentDifficulty: jest.fn(),
      setShouldRestartAnimation: jest.fn(),
    };

    const wrapper = mount(<TypingArea {...props} />);

    const mainTimerSVG = (
      <svg className="app__container__game__container__typearea__container__clock__countdown__svg">
        <circle
          r="6rem"
          cx="7.5rem"
          cy="7.5rem"
          className="app__container__game__container__typearea__container__clock__countdown__svg__clock"
          style={{
            animation: `countdown ${currentTimerValue}s linear forwards`,
          }}
          onAnimationEnd={props.handleTimeOver}
        ></circle>
      </svg>
    );
    expect(wrapper.contains(mainTimerSVG)).toEqual(false);
  });
});
