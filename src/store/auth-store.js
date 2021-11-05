import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    LOGIN: (state, data) => {
      localStorage.setItem("token", data.idToken);
      localStorage.setItem("user", data.user);
      return { user: data.user, idToken: data.idToken, isLoggedIn: true };
    },
    LOGOUT: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return { user: "", idToken: "", isLoggedIn: false };
    },
  };

  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  initStore(actions, {
    user: storedUser ? storedUser : "",
    idToken: storedToken ? storedToken : "",
    isLoggedIn: storedToken && storedUser ? true : false,
  });
};

export default configureStore;
