import React from "react";

const Score = ({ showGlobalTimer }) => {
  return (
    <div className="game__container__game__container__score">
      <div className="game__container__game__container__score__container">
        <h4 className="game__container__game__container__score__container__subheading">
          Fast Fingers
        </h4>
        <h4 className="game__container__game__container__score__container__heading">
          Score: {showGlobalTimer}
        </h4>
      </div>
    </div>
  );
};

export default Score;
