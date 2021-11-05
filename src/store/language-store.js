import { initStore } from "./store";

import languages from "../assets/languages";

const configureStore = () => {
  const actions = {
    CHANGE_LANGUAGE: (state) => {
      return {
        language:
          languages[state.language.languageSelector === "hu" ? "en" : "hu"],
      };
    },
  };

  initStore(actions, { language: languages.hu });
};

export default configureStore;
