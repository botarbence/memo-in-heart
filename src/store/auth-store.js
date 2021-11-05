import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    LOGIN: (state, data) => {
      return { user: data.user, idToken: data.token, isLoggedIn: true };
    },
    LOGOUT: () => {
      return { user: "", idToken: "", isLoggedIn: false };
    },
  };

  initStore(actions, { user: "", idToken: "", isLoggedIn: false });
};

export default configureStore;
