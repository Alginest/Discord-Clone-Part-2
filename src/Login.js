import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
const Login = () => {
  const signIn = () => {
    // do clever google login shizz...
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/86/Discordikona_lv.png"
          alt="discord"
        />
      </div>
      <div className="btn-center">
        <Button className="signBtn" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
