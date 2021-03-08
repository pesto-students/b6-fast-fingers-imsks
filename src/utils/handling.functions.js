import { showGlobalTimer } from "./timer.functions";
import {
  userSignUp,
  userSignIn,
  sendGameEndedDataToDatabase,
} from "./apis.functions";
import { deleteDataFromLocalStorage } from "./localstorage.functions";
import { LOCAL_STORAGE_USER_DATA_KEY } from "./contants";

// 1. Handle Start Timer
export const handleStartTimer = (setTimer, setCurrentGameScore) => {
  // Run only if game is not closed
  setTimer(
    window.setInterval(() => {
      setCurrentGameScore((currentGameScore) => currentGameScore + 1);
    }, 1000)
  );
};

// 3. Handle start game
export const handleSignUp = (setFormError, userName, password, e) => {
  e.preventDefault();

  if (userName === "") {
    setFormError("Please type your userName");
    return;
  }

  if (password === "") {
    setFormError("Please type your password");
    return;
  }

  userSignUp(userName, password, setFormError);
};

// 3. Handle start game
export const handleSignIn = (
  setFormError,
  userName,
  password,
  e
) => {
  e.preventDefault();

  if (userName === "") {
    setFormError("Please type your userName");
    return;
  }

  if (password === "") {
    setFormError("Please type your password");
    return;
  }

  userSignIn(userName, password, setFormError);
};

// 4. Handle word input
export const handleWordInput = (
  currentWord,
  setCorrectWordIndexes,
  setCurrentDifficulty,
  setShouldRestartAnimation,
  e
) => {
  // A. Checks for each character if entered character is correct or not
  for (let index = 0; index < e.target.value.length; index++) {
    // A1. If correct
    if (e.target.value[index] === currentWord[index]) {
      setCorrectWordIndexes((indexes) => [...indexes, index]);
    }
  }

  // B. If word typed correctly
  if (e.target.value === currentWord) {
    // B1. Remove text from input
    e.target.value = "";
    // B2. Add difficulty
    setCurrentDifficulty((prevDifficulty) => prevDifficulty + 0.01);
    setShouldRestartAnimation(true);
  }
};

// 5. Handle Stop Game
export const handleStopGame = (
  setScoreValues,
  currentGameScore,
  timer,
  setCurrentGameScore,
  setIsGameClosed,
  currentLevel
) => {
  sendGameEndedDataToDatabase(currentLevel, currentGameScore);

  // 1. Add to the score board
  setScoreValues((prevScores) => [
    ...prevScores,
    showGlobalTimer(currentGameScore),
  ]);
  // 2. Clear score timer
  window.clearTimeout(timer);
  // 3. Set score timer to default
  setCurrentGameScore(0);
  // 4. Set Game Closed
  setIsGameClosed(true);
};

// 6. Handle Restart game
export const handleRestartGame = (setIsGameClosed) => {
  // 1. Set Game Closed as false
  setIsGameClosed(false);
};

// 7. Handle Time End
export const handleTimeOver = (
  setScoreValues,
  currentGameScore,
  timer,
  setCurrentGameScore,
  setIsGameClosed,
  currentLevel
) => {
  // Send game score to the database
  sendGameEndedDataToDatabase(currentLevel, currentGameScore);

  // 1. Add to the score board
  setScoreValues((prevScores) => [
    ...prevScores,
    showGlobalTimer(currentGameScore),
  ]);
  // 2. Clear score timer
  window.clearTimeout(timer);
  // 3. Set score timer to default
  setCurrentGameScore(0);
  // 4. Set Game Closed
  setIsGameClosed(true);
};

export const handleSignOut = () => {
  deleteDataFromLocalStorage(LOCAL_STORAGE_USER_DATA_KEY);
};
