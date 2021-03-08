import React from "react";
import {
  handleWordInput,
  handleTimeOver,
} from "../../utils/handling.functions";
import CurrentTypingWord from "../globals/CurrentTypingWord";
import TimerCircle from "../globals/TimerCircle";

const TypingArea = ({
  currentTimerValue,
  currentWord,
  correctWordIndexes,
  shouldRestartAnimation,
  setCorrectWordIndexes,
  setCurrentDifficulty,
  setShouldRestartAnimation,
  setScoreValues,
  currentGameScore,
  timer,
  setCurrentGameScore,
  setIsGameClosed,
  currentLevel,
}) => {
  return (
    <div className="game__container__game__container__typearea">
      <div className="game__container__game__container__typearea__container">
        <div className="game__container__game__container__typearea__container__clock">
          <div
            id="countdown"
            className="game__container__game__container__typearea__container__clock__countdown"
          >
            <div
              id="countdown-number"
              className="game__container__game__container__typearea__container__clock__countdown__text"
            >
              {currentTimerValue}s
            </div>
            {!shouldRestartAnimation && (
              <TimerCircle
                currentTimerValue={currentTimerValue}
                handleTimeOver={handleTimeOver}
                setScoreValues={setScoreValues}
                currentGameScore={currentGameScore}
                timer={timer}
                setCurrentGameScore={setCurrentGameScore}
                setIsGameClosed={setIsGameClosed}
                currentLevel={currentLevel}
              />
            )}
          </div>
        </div>
        <div className="game__container__game__container__typearea__container__content">
          <CurrentTypingWord
            currentWord={currentWord}
            correctWordIndexes={correctWordIndexes}
          />
          <input
            type="text"
            className="game__container__game__container__typearea__container__content__input form__input"
            onChange={(e) =>
              handleWordInput(
                currentWord,
                setCorrectWordIndexes,
                setCurrentDifficulty,
                setShouldRestartAnimation,
                e
              )
            }
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default TypingArea;
