import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";
import BeforeGameStartedSection from "../BeforeGameStartedSection";

describe("Component Rendering Tests", () => {
  it(`1. Renders start game sub-heading`, () => {
    const wrapper = shallow(<BeforeGameStartedSection />);
    const startGameHeaderContentHeading = (
      <h1 className="heading-primary--main app__container__startgame__header__content__heading">
        Fast Fingers
      </h1>
    );
    expect(wrapper.contains(startGameHeaderContentHeading)).toEqual(true);
  });

  it(`2. Renders start game heading`, () => {
    const wrapper = shallow(<BeforeGameStartedSection />);
    const startGameHeaderContentSubHeading = (
      <p className="paragraph--main app__container__startgame__header__content__subheading">
        The Ultimate Typing Game
      </p>
    );
    expect(wrapper.contains(startGameHeaderContentSubHeading)).toEqual(true);
  });

  it(`3. Testing Input Field #1`, () => {
    const handleInput = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: "user name" },
    };

    const setName = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setName]);

    const component = shallow(
      <input
        type="text"
        name="name"
        className="form__input"
        placeholder="Type your name"
        onChange={() => handleInput(setName, event)}
        id="userNameInputField"
      />
    );

    component.simulate("change", event);

    expect(handleInput).toHaveBeenCalledTimes(1);
  });

  it(`3. Testing Input Field #2`, () => {
    const handleStartGame = jest.fn();
    const event = {
      preventDefault() {},
    };

    let name = "";

    const setFormError = jest.fn();
    const setIsGameStarted = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setFormError]);
    useStateSpy.mockImplementation((init) => [init, setIsGameStarted]);

    const component = shallow(
      <button
        className="app__container__startgame__action__button"
        onClick={handleStartGame(setFormError, setIsGameStarted, name, event)}
      >
        <img
          src="assets/images/start_button.png"
          className="app__container__startgame__action__button__image"
          alt="start button"
        />
        Start Game
      </button>
    );

    component.simulate("click", event);

    expect(handleStartGame).toHaveBeenCalledTimes(1);
  });
});
