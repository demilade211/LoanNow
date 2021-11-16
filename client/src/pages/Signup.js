
import React, { useState } from "react";
import eye from "../assets/eye.svg";
import hero from "../assets/heroimage.svg";
import ClickButton from "../Components/Button";
import {
  container,
  hero_container,
  form_heading,
  form_subheading,
  signup_container,
  input_container,
  reveal__password,
  revealPassword,
} from "../stylesheets/signup.module.css";

function Signup() {
  //   const [verify, setverify] = useState(false);
  const [reveal, setReveal] = useState(reveal__password);
    const [passwordType, setPasswordType] = useState(false);
    const [confirmPasswordType, setConfirmPasswordType] = useState(false)

  const handlePasswordReveal = () => {
    setReveal(revealPassword);
      setPasswordType(!passwordType);
  };

  const handleConfirmPasswordReveal = () => {
    setReveal(revealPassword);
      setConfirmPasswordType(!confirmPasswordType);
  };
  return (
    <div className={container}>
      <div className={hero_container}>
        <img src={hero} alt="loan now" />
        <p>Don’t be cash strapped, </p>
        <p>Get attractive loan offers here.</p>
      </div>
      <div className={signup_container}>
        <form>
          <p className={form_heading}>Create an account</p>
          <p className={form_subheading}>
            Kindly fill in your details to register with us
          </p>
          <div className={input_container}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
          </div>

          <div className={input_container}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>

          <div className={input_container}>
            <label htmlFor="mobile">Mobile Number</label>
            <input type="text" name="mobile" id="mobile" />
          </div>

          <div className={input_container}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <div className={input_container}>
            <label htmlFor="password">Password</label>
            <input
              type={passwordType ? "text" : "password"}
              name="password"
              id="password"
              autoComplete
            />
            <button type="button" onClick={handlePasswordReveal}>
              <img src={eye} alt="password" className={reveal} />
            </button>
          </div>
          <div className={input_container}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={confirmPasswordType ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              autoComplete
            />
            <button type="button" onClick={handleConfirmPasswordReveal}>
              <img src={eye} alt="password" className={reveal} />
            </button>
          </div>
          <ClickButton variant="secondary" extended text="Proceed" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
