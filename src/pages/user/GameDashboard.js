import React, { useState } from "react";
import Player from "../../components/AfterGameStarted/Player";
import Button from "../../components/globals/Button";
import { useUserData } from "../../utils/hooks";

const GameDashboard = () => {
  const [userName, setUserName] = useState("");

  useUserData(setUserName);

  return (
    <main className="gamedashboard">
      <div className="gamedashboard__container">
        <div className="gamedashboard__container__content">
          <Player userName={userName} />

          <div className="gamedashboard__container__content__actions">
            <h1 className="gamedashboard__container__content__actions__heading">
              What would you like to do?
            </h1>

            <div className="gamedashboard__container__content__actions__container">
              <div className="gamedashboard__container__content__actions__container__item">
                <Button
                  onClick={() => (window.location = "/scores")}
                  buttonText="View previous scores"
                  iconPath="assets/images/previous-scores.png"
                />
              </div>
              <div className="gamedashboard__container__content__actions__container__item">
                <Button
                  onClick={() => (window.location = "/game")}
                  buttonText="Start new game"
                  iconPath="assets/images/start-game.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameDashboard;
