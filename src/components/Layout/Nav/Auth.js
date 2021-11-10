import { useState } from "react";
import AccountIcon from "@material-ui/icons/AccountCircle";
import { useStore } from "../../../store/store";
import useHttp from "../../../hooks/useHttp";
import { APIKEY } from "../../../api";

import classes from "./Auth.module.css";

const Auth = () => {
  const [state, dispatch] = useStore();
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, error, sendRequest: sendAuthRequest } = useHttp();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const sendAuth = async () => {
    const url = isLogin
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;

    const showUser = (data) => {
      dispatch("LOGIN", { user: data.email, idToken: data.idToken });
    };

    sendAuthRequest(
      {
        url: url,
        method: "POST",
        body: {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      showUser
    );

    setUser({ email: "", password: "" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendAuth();
  };

  const accountClickHandler = () => {
    state.authOpen ? dispatch("CLOSE_AUTH") : dispatch("OPEN_AUTH");
  };

  const logoutHandler = () => {
    dispatch("LOGOUT");
  };

  return (
    <div
      className={`${classes.auth} ${
        state.authOpen ? classes["auth--open"] : ""
      }`}
    >
      <div onClick={accountClickHandler} className={classes.icon}>
        <AccountIcon />
      </div>
      <div
        className={`${classes.form} ${
          state.authOpen ? classes["form--open"] : ""
        }`}
      >
        <h2>{state.isLoggedIn ? state.user : isLogin ? "Login" : "Sign up"}</h2>
        {!state.isLoggedIn && (
          <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Your email"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Your password"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            ></input>
            {error && <p>{error}</p>}
            <button disabled={isLoading} type="submit">
              {isLoading ? "Please Wait..." : "Submit"}
            </button>
          </form>
        )}
        <button
          type="button"
          onClick={state.isLoggedIn ? logoutHandler : switchAuthModeHandler}
        >
          {state.isLoggedIn
            ? "Logout"
            : isLogin
            ? "Create new account"
            : "Login with existing account"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
