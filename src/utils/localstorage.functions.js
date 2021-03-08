export const setDataToLocalStorage = (key, payload) => {
  try {
    localStorage.setItem(key, JSON.stringify(payload));
  } catch (e) {
    console.log(e);
  }
};

export const getDataFromLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e);
  }
};

export const deleteDataFromLocalStorage = (key) => {
  try {
    localStorage.clear(key);
    window.location = '/'
  } catch (e) {
    console.log(e);
  }
};
