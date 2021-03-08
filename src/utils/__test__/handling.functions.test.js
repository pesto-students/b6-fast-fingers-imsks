import React from "react";
import {
  handleInput,
  handleStartGame,
  handleStartTimer,
  handleWordInput,
  handleStopGame,
  handleRestartGame,
  handleTimeOver,
} from "../handling.functions";

describe(`handling Function Tests`, () => {
  it(`1. Testing 'handleInput'`, () => {
    const event = {
      preventDefault() {},
      target: { value: `user name` },
    };

    const setName = jest.fn();
    const useStateSpy = jest.spyOn(React, `useState`);
    useStateSpy.mockImplementation((init) => [init, setName]);

    handleInput(setName, event);

    expect(setName).toHaveBeenCalledTimes(1);
  });

  it(`2. Testing 'handleStartGame' #1 When name is empty only setFormError will be called`, () => {
    const event = {
      preventDefault() {},
    };

    const name = ``;

    const setFormError = jest.fn();
    const setIsGameStarted = jest.fn();
    const useStateSpy = jest.spyOn(React, `useState`);
    useStateSpy.mockImplementation((init) => [init, setFormError]);
    useStateSpy.mockImplementation((init) => [init, setIsGameStarted]);

    handleStartGame(setFormError, setIsGameStarted, name, event);

    expect(setIsGameStarted).toHaveBeenCalledTimes(0);
    expect(setFormError).toHaveBeenCalledTimes(1);
  });

  it(`2. handleStartGame #1 When name is not empty`, () => {
    const event = {
      preventDefault() {},
    };

    const name = `sachin`;

    const setFormError = jest.fn();
    const setIsGameStarted = jest.fn();
    const useStateSpy = jest.spyOn(React, `useState`);
    useStateSpy.mockImplementation((init) => [init, setFormError]);
    useStateSpy.mockImplementation((init) => [init, setIsGameStarted]);

    handleStartGame(setFormError, setIsGameStarted, name, event);

    expect(setIsGameStarted).toHaveBeenCalledTimes(1);
    expect(setFormError).toHaveBeenCalledTimes(0);
  });

  it(`3. Testing 'handleStartTimer'`, () => {
    const setTimer = jest.fn();
    const setCurrentGameScore = jest.fn();
    const useStateSpy = jest.spyOn(React, `useState`);
    useStateSpy.mockImplementation((init) => [init, setTimer]);
    useStateSpy.mockImplementation((init) => [init, setCurrentGameScore]);

    handleStartTimer(setTimer, setCurrentGameScore);

    expect(setTimer).toHaveBeenCalledTimes(1);
  });

  it(`4. Testing 'handleWordInput' #1 Characters are traced correctly`, () => {
    const event = {
      target: { value: "test22" },
    };

    const currentWord = "test33";
    const setCorrectWordIndexes = jest.fn();
    const setCurrentDifficulty = jest.fn();
    const setShouldRestartAnimation = jest.fn();

    const useStateSpy = jest.spyOn(React, `useState`);

    useStateSpy.mockImplementation((init) => [init, currentWord]);
    useStateSpy.mockImplementation((init) => [init, setCorrectWordIndexes]);
    useStateSpy.mockImplementation((init) => [init, setCurrentDifficulty]);
    useStateSpy.mockImplementation((init) => [init, setShouldRestartAnimation]);

    handleWordInput(
      currentWord,
      setCorrectWordIndexes,
      setCurrentDifficulty,
      setShouldRestartAnimation,
      event
    );

    expect(setCorrectWordIndexes).toHaveBeenCalledTimes(4);
  });

  it(`4. Testing 'handleWordInput' #2 Characters are traced correctly`, () => {
    const event = {
      target: { value: "test" },
    };

    const currentWord = "test";
    const setCorrectWordIndexes = jest.fn();
    const setCurrentDifficulty = jest.fn();
    const setShouldRestartAnimation = jest.fn();

    const useStateSpy = jest.spyOn(React, `useState`);

    useStateSpy.mockImplementation((init) => [init, currentWord]);
    useStateSpy.mockImplementation((init) => [init, setCorrectWordIndexes]);
    useStateSpy.mockImplementation((init) => [init, setCurrentDifficulty]);
    useStateSpy.mockImplementation((init) => [init, setShouldRestartAnimation]);

    handleWordInput(
      currentWord,
      setCorrectWordIndexes,
      setCurrentDifficulty,
      setShouldRestartAnimation,
      event
    );

    expect(setCurrentDifficulty).toHaveBeenCalledTimes(1);
    expect(setShouldRestartAnimation).toHaveBeenCalledTimes(1);
  });

  it(`4. Testing 'handleWordInput' #3 entered value is not matching`, () => {
    const event = {
      target: { value: "not a test" },
    };

    const currentWord = "test2";
    const setCorrectWordIndexes = jest.fn();
    const setCurrentDifficulty = jest.fn();
    const setShouldRestartAnimation = jest.fn();

    const useStateSpy = jest.spyOn(React, `useState`);

    useStateSpy.mockImplementation((init) => [init, currentWord]);
    useStateSpy.mockImplementation((init) => [init, setCorrectWordIndexes]);
    useStateSpy.mockImplementation((init) => [init, setCurrentDifficulty]);
    useStateSpy.mockImplementation((init) => [init, setShouldRestartAnimation]);

    handleWordInput(
      currentWord,
      setCorrectWordIndexes,
      setCurrentDifficulty,
      setShouldRestartAnimation,
      event
    );

    expect(setCurrentDifficulty).toHaveBeenCalledTimes(0);
    expect(setShouldRestartAnimation).toHaveBeenCalledTimes(0);
  });

  it(`5. Testing 'handleStopGame'`, () => {
    const timer = "1";

    const setScoreValues = jest.fn();
    const currentGameScore = jest.fn();
    const setCurrentGameScore = jest.fn();
    const setIsGameClosed = jest.fn();

    const useStateSpy = jest.spyOn(React, `useState`);

    useStateSpy.mockImplementation((init) => [init, setScoreValues]);
    useStateSpy.mockImplementation((init) => [init, currentGameScore]);
    useStateSpy.mockImplementation((init) => [init, setCurrentGameScore]);
    useStateSpy.mockImplementation((init) => [init, setIsGameClosed]);

    handleStopGame(
      setScoreValues,
      currentGameScore,
      timer,
      setCurrentGameScore,
      setIsGameClosed
    );

    expect(setScoreValues).toHaveBeenCalledTimes(1);
    expect(setCurrentGameScore).toHaveBeenCalledTimes(1);
    expect(setIsGameClosed).toHaveBeenCalledTimes(1);
  });

  it(`6. Testing 'handleRestartGame'`, () => {
    const setIsGameStarted = jest.fn();
    const setIsGameClosed = jest.fn();

    const useStateSpy = jest.spyOn(React, `useState`);

    useStateSpy.mockImplementation((init) => [init, setIsGameStarted]);
    useStateSpy.mockImplementation((init) => [init, setIsGameClosed]);

    handleRestartGame(setIsGameStarted, setIsGameClosed);

    expect(setIsGameStarted).toHaveBeenCalledTimes(1);
    expect(setIsGameClosed).toHaveBeenCalledTimes(1);
  });

  it(`6. Testing 'handleTimeOver'`, () => {
    const timer = "1";

    const setScoreValues = jest.fn();
    const currentGameScore = jest.fn();
    const setCurrentGameScore = jest.fn();
    const setIsGameClosed = jest.fn();

    const useStateSpy = jest.spyOn(React, `useState`);

    useStateSpy.mockImplementation((init) => [init, setScoreValues]);
    useStateSpy.mockImplementation((init) => [init, currentGameScore]);
    useStateSpy.mockImplementation((init) => [init, setCurrentGameScore]);
    useStateSpy.mockImplementation((init) => [init, setIsGameClosed]);

    handleTimeOver(
      setScoreValues,
      currentGameScore,
      timer,
      setCurrentGameScore,
      setIsGameClosed
    );

    expect(setScoreValues).toHaveBeenCalledTimes(1);
    expect(setCurrentGameScore).toHaveBeenCalledTimes(1);
    expect(setIsGameClosed).toHaveBeenCalledTimes(1);
  });
});
