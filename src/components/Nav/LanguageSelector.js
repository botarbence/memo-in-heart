import React from "react";
import { useStore } from "../../store/store";

import classes from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const [state, dispatch] = useStore();

  const languageClickHandler = () => {
    dispatch("CHANGE_LANGUAGE");
  };

  return (
    <div className={classes.languageselector}>
      <div onClick={languageClickHandler}>
        {state.language.languageSelector.toUpperCase()}
      </div>
    </div>
  );
};

export default LanguageSelector;
