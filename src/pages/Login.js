import React, { useState } from "react";

const Login = ({ onLoginSubmit }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(user);
    setUser({ email: "", password: "" });
  };

  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Login;
