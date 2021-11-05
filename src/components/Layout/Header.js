import React from "react";

import Navbar from "../Nav/Navbar";
import SlideShow from "../UI/SlideShow";
import classes from "./Header.module.css";
import { useStore } from "../../store/store";

import logo from "../../assets/img/MEMO_Logo_arany.svg";

const Header = () => {
  const [{ language }] = useStore();

  return (
    <header className={classes.header}>
      <SlideShow />
      <div className={classes.wrapper}>
        <img src={logo} alt="LOGO" />
        <h2>{language.headerTitle}</h2>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
