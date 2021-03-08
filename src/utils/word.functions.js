import AllWords from "../data/dictionary.json";

// 1. Get next word for a level
export const getNextWordForALevel = (level) => {
  if (!["Easy", "Medium", "Hard"].includes(level)) {
    return;
  }

  let currentWord = AllWords[Math.floor(Math.random() * AllWords.length)];

  switch (level) {
    case "Easy":
      if (!(currentWord.length <= 4)) {
        return getNextWordForALevel(level);
      }
      break;

    case "Medium":
      if (!(5 <= currentWord.length <= 8)) {
        return getNextWordForALevel(level);
      }
      break;

    case "Hard":
      if (!(8 < currentWord.length)) {
        return getNextWordForALevel(level);
      }
      break;

    default:
      break;
  }

  return currentWord;
};

// 2. Check if level needs to increase
export const getNextLevel = (level, difficulty) => {
  if (level === "Easy" && difficulty > 1.5) {
    return "Medium";
  } else if (level === "Medium" && difficulty > 2) {
    return "Hard";
  } else {
    return "";
  }
};
