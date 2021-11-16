import React, { useState } from "react";
import eye from "../assets/eye.svg";
import ClickButton from "../Components/Button";
import {
  container,
  form_heading,
  input_container,
  reveal__password,
  forgot_password,
  revealPassword,
  login_container,
} from "../stylesheets/login.module.css";

function Login() {
  const [reveal, setReveal] = useState(reveal__password);
  const [passwordType, setPasswordType] = useState(false);
  const handlePasswordReveal = () => {
    setReveal(revealPassword);
    setPasswordType(!passwordType);
  };

  return (
    <div className={container}>
      <div className={login_container}>
        <form>
          <h3 className={form_heading}>Login to your account</h3>
          <div className={input_container}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>

          <div className={input_container}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={passwordType ? "text" : "password"}
              autoComplete
            />
            <button type="button" onClick={handlePasswordReveal}>
              <img src={eye} alt="password" className={reveal} />
            </button>
            <p className={forgot_password}>Forgot your password?</p>
          </div>
          <ClickButton variant="secondary" extended text="Sign in" />
        </form>
      </div>
    </div>
  );
}

export default Login;
