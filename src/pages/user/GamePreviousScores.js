import React, { useState, useEffect } from "react";
import Player from "../../components/AfterGameStarted/Player";
import Button from "../../components/globals/Button";
import { useUserData } from "../../utils/hooks";
import { getAllGameScoresForUser } from "../../utils/apis.functions";

const GamePreviousScores = () => {
  const [userName, setUserName] = useState("");
  const [isScoresFetching, setIsScoresFetching] = useState(true);
  const [allGameScoresList, setAllGameScoresList] = useState([]);

  useUserData(setUserName);

  const fetchGameScores = async () => {
    const listOfAllGameScores = await getAllGameScoresForUser();
    setAllGameScoresList(listOfAllGameScores);
  };

  useEffect(() => {
    fetchGameScores();
  }, []);

  return (
    <main className="gamepreviousscores">
      <div className="gamepreviousscores__container">
        <div className="gamepreviousscores__container__content">
          <Player userName={userName} />

          <div className="gamepreviousscores__container__content__view">
            <h1 className="gamepreviousscores__container__content__view__heading">
              Your previous scores
            </h1>
            {isScoresFetching ? (
              <div className="gamepreviousscores__container__content__view__scores">
                {allGameScoresList.length > 0 ? (
                  allGameScoresList.map((scoreData, key) => {
                    const { difficulty, score, scoredAt } = scoreData;

                    return (
                      <div
                        className="gamepreviousscores__container__content__view__scores__container"
                        key={key}
                      >
                        <h1 className="gamepreviousscores__container__content__view__scores__container__gameno">
                          {difficulty}
                        </h1>
                        <h1 className="gamepreviousscores__container__content__view__scores__container__score">
                          {score}
                        </h1>
                        <h1 className="gamepreviousscores__container__content__view__scores__container__scoredat">
                          {new Date(scoredAt).toDateString()}
                        </h1>
                      </div>
                    );
                  })
                ) : (
                  <h1 className="gamepreviousscores__container__content__view__scores__nodata">
                    No scores found
                  </h1>
                )}
              </div>
            ) : (
              <h1 className="gamepreviousscores__container__content__view__scores__nodata">
                Game scores loading...
              </h1>
            )}

            <Button
              onClick={() => (window.location = "/dashboard")}
              buttonText="Back to dashboard"
              iconPath="assets/images/back.png"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GamePreviousScores;
