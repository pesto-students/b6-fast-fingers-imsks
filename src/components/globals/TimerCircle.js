import React from "react";

const TimerCircle = ({
  currentTimerValue,
  handleTimeOver,
  setScoreValues,
  currentGameScore,
  timer,
  setCurrentGameScore,
  setIsGameClosed,
  currentLevel,
}) => {
  return (
    <svg className="game__container__game__container__typearea__container__clock__countdown__svg">
      <circle
        r="6rem"
        cx="7.5rem"
        cy="7.5rem"
        className="game__container__game__container__typearea__container__clock__countdown__svg__clock"
        style={{
          animation: `countdown ${currentTimerValue}s linear forwards`,
        }}
        onAnimationEnd={() =>
          handleTimeOver(
            setScoreValues,
            currentGameScore,
            timer,
            setCurrentGameScore,
            setIsGameClosed,
            currentLevel
          )
        }
      ></circle>
    </svg>
  );
};

export default TimerCircle;
