import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { handleSignIn } from "../../utils/handling.functions";
import Button from "../../components/globals/Button";
import FormError from "../../components/globals/FormError";
import HomepageHero from "../../components/BeforeGameStarted/HomepageHero";
import { getDataFromLocalStorage } from "../../utils/localstorage.functions";
import { LOCAL_STORAGE_USER_DATA_KEY } from "../../utils/contants";

const SignIn = () => {
  // Hooks
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const userData = getDataFromLocalStorage(LOCAL_STORAGE_USER_DATA_KEY);
  if (userData) return <Redirect to="/dashboard" />;

  return (
    <main className="signin">
      <section className="signin__container">
        <div className="signin__container__signin__header">
          <HomepageHero />
        </div>
        <div className="signin__container__signin">
          <div className="signin__container__signin__form">
            <form className="signin__container__signin__form__container form">
              <input
                type="text"
                name="name"
                className="form__input"
                placeholder="Type your name"
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                type="password"
                name="name"
                className="form__input"
                placeholder="Type your password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {formError && <FormError formError={formError} />}
            </form>

            <div className="signin__container__signin__action">
              <Button
                onClick={(e) =>
                  handleSignIn(setFormError, userName, password, e)
                }
                iconPath="assets/images/start_button.png"
                iconAltText="Start button"
                buttonText="Login"
              />
            </div>
            <div className="signup__container__footer">
              <Link to="/" className="signup__container__footer__link">
                Never joined? Register here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
