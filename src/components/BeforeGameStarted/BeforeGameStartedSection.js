import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleStartGame } from "../../utils/handling.functions";
import Button from "../globals/Button";
import FormError from "../globals/FormError";
import UserDifficultySelect from "../globals/UserDifficultySelect";
import HomepageHero from "./HomepageHero";

const BeforeGameStartedSection = ({
  setUserName,
  setPassword,
  setIsGameStarted,
  userName,
  password,
  setCurrentLevel,
}) => {
  const [formError, setFormError] = useState("");

  return (
    <div className="signup__container__startgame">
      <div className="signup__container__startgame__header">
        <HomepageHero />
      </div>

      <div className="signup__container__startgame__form">
        <form className="signup__container__startgame__form__container form">
          <input
            type="text"
            name="name"
            className="form__input"
            placeholder="Type your name"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Type your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {formError && <FormError formError={formError} />}

          <UserDifficultySelect setCurrentLevel={setCurrentLevel} />
        </form>
      </div>

      <div className="signup__container__startgame__action">
        <Button
          onClick={(e) =>
            handleStartGame(
              setFormError,
              setIsGameStarted,
              userName,
              password,
              e
            )
          }
          iconPath="assets/images/start_button.png"
          iconAltText="Start button"
        />
      </div>

      <div className="signup__container__footer">
        <Link to="/signin" className="signup__container__footer__link">Already joined? Login here</Link>
      </div>
    </div>
  );
};

export default BeforeGameStartedSection;
