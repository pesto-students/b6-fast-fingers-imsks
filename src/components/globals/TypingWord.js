import React from "react";

const TypingWord = ({
  handleWordInput,
  currentWord,
  setCorrectWordIndexes,
  setCurrentDifficulty,
  setShouldRestartAnimation,
}) => {
  return (
    <input
      type="text"
      className="app__container__game__container__typearea__container__content__input form__input"
      onChange={(e) =>
        handleWordInput(
          currentWord,
          setCorrectWordIndexes,
          setCurrentDifficulty,
          setShouldRestartAnimation,
          e
        )
      }
      autoFocus
    />
  );
};

export default TypingWord;
