import React from "react";
import { handleRestartGame } from "../../utils/handling.functions";
import Button from "../globals/Button";

const GameStopped = ({ scoreValues, setIsGameClosed }) => {
  return (
    <div className="game__container__game__container__gameended">
      <div className="game__container__game__container__gameended__content">
        <h3 className="game__container__game__container__gameended__content__subheading">
          Score : Game {scoreValues.length}
        </h3>
        <h1 className="game__container__game__container__gameended__content__heading">
          {scoreValues[scoreValues.length - 1]}
        </h1>
        <div className="game__container__game__container__gameended__action">
          <Button
            onClick={() => handleRestartGame(setIsGameClosed)}
            iconPath="assets/images/restart.png"
            iconAltText="restart button"
            buttonText="Restart Game"
          />

          <Button
            onClick={() => (window.location = "/dashboard")}
            buttonText="Back to dashboard"
            iconPath="assets/images/back.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GameStopped;
