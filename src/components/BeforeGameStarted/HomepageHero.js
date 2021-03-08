import React from "react";

const HomepageHero = () => {
  return (
    <div className="hero__header__content">
      <img
        src="assets/images/keyboard.png"
        alt="keyboard"
        className="hero__header__content__image"
      />
      <h1 className="heading-primary--main hero__header__content__heading">
        Fast Fingers
      </h1>
      <p className="paragraph--main hero__header__content__subheading">
        The Ultimate Typing Game
      </p>
    </div>
  );
};

export default HomepageHero;
