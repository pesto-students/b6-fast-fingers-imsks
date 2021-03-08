import React from "react";

const Player = (props) => {
  const { userName, currentLevel } = props;

  return (
    <div className="player">
      <div className="player__container">
        <div className="player__container__item">
          <img
            src="assets/images/profile.png"
            className="player__container__item__image"
            alt="profile"
          />
          <h3 className="player__container__item__text">
            {"User name: " + userName}
          </h3>
        </div>
        {currentLevel ? (
          <div className="player__container__item">
            <img
              src="assets/images/console.png"
              className="player__container__item__image"
              alt="profile"
            />
            <h3 className="player__container__item__text">
              {"Level: " + currentLevel}
            </h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Player;
