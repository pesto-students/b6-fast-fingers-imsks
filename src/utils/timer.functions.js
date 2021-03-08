// 1. Formatting timer values for UI
export const showGlobalTimer = (currentGameScore) => {
  if (Number.isInteger(Number(currentGameScore)) > 0 && typeof currentGameScore == 'number') {
    const getSeconds = `0${currentGameScore % 60}`.slice(-2);
    const minutes = `${Math.floor(currentGameScore / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes}m : ${getSeconds}s`;
  }

  return;
};
