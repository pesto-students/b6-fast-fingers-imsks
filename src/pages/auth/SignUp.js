import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { handleSignUp } from "../../utils/handling.functions";
import Button from "../../components/globals/Button";
import FormError from "../../components/globals/FormError";
import HomepageHero from "../../components/BeforeGameStarted/HomepageHero";
import { getDataFromLocalStorage } from "../../utils/localstorage.functions";
import { LOCAL_STORAGE_USER_DATA_KEY } from "../../utils/contants";

const SignUp = () => {
  // Hooks
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const userData = getDataFromLocalStorage(LOCAL_STORAGE_USER_DATA_KEY);
  if (userData) return <Redirect to="/dashboard" />;

  return (
    <main className="signup">
      <section className="signup__container">
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
            </form>
          </div>

          <div className="signup__container__startgame__action">
            <Button
              onClick={(e) =>
                handleSignUp(setFormError, userName, password, e)
              }
              iconPath="assets/images/start_button.png"
              iconAltText="Start button"
              buttonText="Register now"
            />
          </div>

          <div className="signup__container__footer">
            <Link to="/signin" className="signup__container__footer__link">
              Already joined? Login here
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
