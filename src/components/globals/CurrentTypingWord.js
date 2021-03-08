import React from "react";

const CurrentTypingWord = ({ currentWord, correctWordIndexes }) => {
  return (
    <h3 className="game__container__game__container__typearea__container__content__word">
      {currentWord &&
        currentWord.split("").map((char, index) => {
          if (correctWordIndexes.includes(index)) {
            return (
              <span style={{ color: "white" }} key={index}>
                {char}
              </span>
            );
          } else {
            return (
              <span style={{ color: "#f45759" }} key={index}>
                {char}
              </span>
            );
          }
        })}
    </h3>
  );
};

export default CurrentTypingWord;
