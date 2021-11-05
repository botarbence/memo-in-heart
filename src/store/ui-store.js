import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    CLOSE_NAV: () => {
      return { navMenuOpen: false };
    },
    OPEN_NAV: () => {
      return { navMenuOpen: true };
    },
    STICK_NAV: () => {
      return { navBarStick: true };
    },
    UNSTICK_NAV: () => {
      return { navBarStick: false };
    },
    OPEN_AUTH: () => {
      return { loginFormOpen: true };
    },
    CLOSE_AUTH: () => {
      return { loginFormOpen: false };
    },
  };

  initStore(actions, {
    navMenuOpen: false,
    loginFormOpen: false,
    navBarStick: false,
  });
};

export default configureStore;
