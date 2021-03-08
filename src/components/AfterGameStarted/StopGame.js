import React from "react";
import { handleStopGame } from "../../utils/handling.functions";
import Button from "../globals/Button";

const StopGame = ({
  setScoreValues,
  currentGameScore,
  timer,
  setCurrentGameScore,
  setIsGameClosed,
  currentLevel,
}) => {
  return (
    <div className="game__container__game__container__stop">
      <div className="game__container__game__container__stop__container">
        <Button
          onClick={() =>
            handleStopGame(
              setScoreValues,
              currentGameScore,
              timer,
              setCurrentGameScore,
              setIsGameClosed,
              currentLevel
            )
          }
          buttonText="Stop Game"
          iconPath="assets/images/cancel.png"
        />
      </div>
    </div>
  );
};

export default StopGame;
