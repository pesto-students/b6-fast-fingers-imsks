import axios from "axios";
import { setDataToLocalStorage } from "./localstorage.functions";
import { LOCAL_STORAGE_USER_DATA_KEY } from "./contants";

export const userSignUp = (userName, password, setFormError) => {
  axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/user/signup`,
    data: {
      userName,
      password,
    },
  })
    .then((result) => {
      const {
        userId,
        userName,
        accessToken,
        refreshToken,
      } = result.data.payload;

      const payload = {
        userId,
        userName,
        accessToken,
        refreshToken,
      };

      setDataToLocalStorage(LOCAL_STORAGE_USER_DATA_KEY, payload);
      window.location = "/dashboard";
    })
    .catch((error) => {
      setFormError(
        error.response ? error.response.data.message : "Something went wrong."
      );
    });
};

export const userSignIn = (userName, password, setFormError) => {
  axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/user/signin`,
    data: {
      userName,
      password,
    },
  })
    .then((result) => {
      const {
        userId,
        userName,
        accessToken,
        refreshToken,
      } = result.data.payload;

      const payload = {
        userId,
        userName,
        accessToken,
        refreshToken,
      };

      setDataToLocalStorage(LOCAL_STORAGE_USER_DATA_KEY, payload);
      window.location = "/dashboard";
    })
    .catch((error) => {
      console.log(error.response.data);
      setFormError(
        error.response ? error.response.data.message : "Something went wrong."
      );
    });
};

export const sendGameEndedDataToDatabase = (
  difficulty = "EASY",
  currentGameScore
) => {
  const { userId } = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_USER_DATA_KEY)
  );

  axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/game/add-game-score`,
    data: {
      userId,
      difficulty,
      score: currentGameScore + "s",
    },
  }).catch((error) => {
    alert(error.response.data.message);
  });
};

export const getAllGameScoresForUser = async () => {
  const { userId } = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_USER_DATA_KEY)
  );

  return axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/game/get-all-game-scores-by-userid`,
    data: {
      userId,
    },
  })
    .then((response) => {
      return response.data.payload;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
