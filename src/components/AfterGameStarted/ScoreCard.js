import React from "react";

const ScoreCard = (props) => {
  const { scoreValues } = props;

  return (
    <div className="game__container__game__container__scoreboard">
      <div className="game__container__game__container__scoreboard__container">
        <h3 className="game__container__game__container__scoreboard__container__heading">
          Score Card
        </h3>
        <div className="game__container__game__container__scoreboard__container__scores">
          {scoreValues.map((score, key) => {
            return (
              <h2
                className="game__container__game__container__scoreboard__container__scores__item"
                key={key}
              >
                Game {key + 1}: {score}
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
