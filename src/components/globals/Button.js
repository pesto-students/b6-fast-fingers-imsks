import React from "react";

const Button = ({ onClick, iconPath, buttonText, iconAltText = "icon" }) => {
  return (
    <button className="btn btn-md" onClick={onClick}>
      {iconPath ? (
        <img
          src={iconPath}
          className="btn__image"
          alt={iconAltText}
        />
      ) : (
        ""
      )}

      {buttonText}
    </button>
  );
};

export default Button;
