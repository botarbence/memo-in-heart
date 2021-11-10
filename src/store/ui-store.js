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
      return { authOpen: true };
    },
    CLOSE_AUTH: () => {
      return { authOpen: false };
    },
    OPEN_MODAL: () => {
      return { modalOpen: true };
    },
    CLOSE_MODAL: () => {
      return { modalOpen: false };
    },
  };

  initStore(actions, {
    navMenuOpen: false,
    navBarStick: false,
    authOpen: false,
    modalOpen: true,
  });
};

export default configureStore;
