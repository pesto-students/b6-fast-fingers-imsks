import React from "react";

const SignOutButton = ({ handleSignOut }) => {
  return (
    <div className="game__container__game__container__signout">
      <button
        className="btn game__container__game__container__signout__button"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignOutButton;
