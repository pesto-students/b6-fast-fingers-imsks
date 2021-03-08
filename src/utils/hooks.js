import { useEffect } from "react";
import { LOCAL_STORAGE_USER_DATA_KEY } from "./contants";
import { getDataFromLocalStorage } from "./localstorage.functions";

// Once game is started, ended or level changes
export const useGameStatus = (
  isGameClosed,
  currentLevel,
  setCurrentWord,
  getNextWordForALevel,
  handleStartTimer,
  setTimer,
  setCurrentGameScore
) => {
  useEffect(() => {
    if (!isGameClosed) {
      // 1. Get first word
      setCurrentWord(getNextWordForALevel(currentLevel));

      // 2. Start the score timer
      handleStartTimer(setTimer, setCurrentGameScore);
    }
  }, [isGameClosed, currentLevel]);
};

export const useGameData = (
  currentDifficulty,
  currentLevel,
  getNextLevel,
  setCurrentLevel,
  getNextWordForALevel,
  setCurrentWord,
  setCurrentTimerValue,
  setShouldRestartAnimation,
  setCorrectWordIndexes
) => {
  // Change word from dictionary => Once game is started
  useEffect(() => {
    // 1. Check if currentLevel needs to increase
    if (getNextLevel(currentLevel, currentDifficulty) !== "")
      setCurrentLevel(getNextLevel(currentLevel, currentDifficulty));
    // 2. Get Next Word
    const nextWord = getNextWordForALevel(currentLevel);
    console.log(currentLevel);
    setCurrentWord(nextWord);
    // 3. Set new timer value
    setCurrentTimerValue(Math.round(nextWord.length / currentDifficulty));
    // 4. Set Animation restart flag as true
    setShouldRestartAnimation(false);
    // 5. Empty array for correct words
    setCorrectWordIndexes([]);
  }, [currentDifficulty, currentLevel]);
};

export const useUserData = (setUserName) => {
  useEffect(() => {
    const userData = getDataFromLocalStorage(LOCAL_STORAGE_USER_DATA_KEY);
    if (userData) {
      const { userName } = userData;
      setUserName(userName);
    } else {
      window.location = "/";
    }
  }, [setUserName]);
};
