import React, { useState } from "react";
import Player from "../../components/AfterGameStarted/Player";
import Score from "../../components/AfterGameStarted/Score";
import ScoreCard from "../../components/AfterGameStarted/ScoreCard";
import TypingArea from "../../components/AfterGameStarted/TypingArea";
import StopGame from "../../components/AfterGameStarted/StopGame";
import GameStopped from "../../components/AfterGameStarted/GameStopped";
import SignOutButton from "../../components/AfterGameStarted/SignOutButton";
import { showGlobalTimer } from "../../utils/timer.functions";
import { getNextWordForALevel, getNextLevel } from "../../utils/word.functions";
import {
  handleStartTimer,
  handleSignOut,
} from "../../utils/handling.functions";
import { useGameStatus, useGameData, useUserData } from "../../utils/hooks";

const GameStartedContainer = () => {
  const [userName, setUserName] = useState("");
  const [currentLevel, setCurrentLevel] = useState("Easy");
  const [currentWord, setCurrentWord] = useState("");
  const [currentDifficulty, setCurrentDifficulty] = useState(1);
  const [currentTimerValue, setCurrentTimerValue] = useState(2);
  const [currentGameScore, setCurrentGameScore] = useState(0);
  const [isGameClosed, setIsGameClosed] = useState(false);
  const [timer, setTimer] = useState(null);
  const [shouldRestartAnimation, setShouldRestartAnimation] = useState(false);
  const [correctWordIndexes, setCorrectWordIndexes] = useState([]);
  const [scoreValues, setScoreValues] = useState([]);

  useGameStatus(
    isGameClosed,
    currentLevel,
    setCurrentWord,
    getNextWordForALevel,
    handleStartTimer,
    setTimer,
    setCurrentGameScore
  );

  useGameData(
    currentDifficulty,
    currentLevel,
    getNextLevel,
    setCurrentLevel,
    getNextWordForALevel,
    setCurrentWord,
    setCurrentTimerValue,
    setShouldRestartAnimation,
    setCorrectWordIndexes
  );

  useUserData(setUserName);

  return (
    <div className="game">
      <div className="game__container">
        <div className="game__container__game">
          <div className="game__container__game__container">
            <Player userName={userName} currentLevel={currentLevel} />
            <Score showGlobalTimer={showGlobalTimer(currentGameScore)} />
            <ScoreCard scoreValues={scoreValues} />
            {!isGameClosed ? (
              <>
                <TypingArea
                  currentTimerValue={currentTimerValue}
                  currentWord={currentWord}
                  correctWordIndexes={correctWordIndexes}
                  shouldRestartAnimation={shouldRestartAnimation}
                  setCorrectWordIndexes={setCorrectWordIndexes}
                  setCurrentDifficulty={setCurrentDifficulty}
                  setShouldRestartAnimation={setShouldRestartAnimation}
                  setScoreValues={setScoreValues}
                  currentGameScore={currentGameScore}
                  timer={timer}
                  setCurrentGameScore={setCurrentGameScore}
                  setIsGameClosed={setIsGameClosed}
                  currentLevel={currentLevel}
                />
                <StopGame
                  setScoreValues={setScoreValues}
                  currentGameScore={currentGameScore}
                  timer={timer}
                  setCurrentGameScore={setCurrentGameScore}
                  setIsGameClosed={setIsGameClosed}
                  currentLevel={currentLevel}
                />
              </>
            ) : (
              <GameStopped
                scoreValues={scoreValues}
                setIsGameClosed={setIsGameClosed}
              />
            )}

            <SignOutButton handleSignOut={handleSignOut} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStartedContainer;
