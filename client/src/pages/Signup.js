import React, { useState } from "react";
import eye from "../assets/eye.svg";
import hero from "../assets/heroimage.svg";
import { VerifyAccount } from "../Components/AccountSetup";
import Appmodal from '../Components/Appmodal.js'
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
  const success = false;
  const user_verify = false;
  const [reveal, setReveal] = useState(reveal__password);
  const [passwordType, setPasswordType] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState(false);

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
        {!success && !user_verify && (
          <>
            <p>Don’t be cash strapped, </p>
            <p>Get attractive loan offers here.</p>
          </>
        )}

        {user_verify && <p>You are almost there, keep your head up.</p>}
        {success && (
          <p>
            Yaay!!! You made it here. Now dive in <br /> and browse available
            loan offers.
          </p>
        )}
      </div>
      {user_verify && <VerifyAccount />}
      {success && (
        <Appmodal
          title="Account Creation Success!"
          text="Congratulations, you are one click away from getting attractive loan offers."
          path='/dashboard'
          target='Go to Dashboard'
        />
      )}
      {!user_verify && !success && (
        <div className={signup_container}>
          <form>
            <p className={form_heading}>Create an account</p>

            <p className={form_subheading}>
              Kindly fill in your details to register with us
            </p>
            <div className={input_container}>
              <label htmlFor="firstname">First Name</label>
              <input type="text"  id="firstname" />
            </div>

            <div className={input_container}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text"  id="lastname" />
            </div>

            <div className={input_container}>
              <label htmlFor="mobile">Mobile Number</label>
              <input type="text"  id="mobile" />
            </div>

            <div className={input_container}>
              <label htmlFor="email">Email</label>
              <input type="text"  id="email" />
            </div>

            <div className={input_container}>
              <label htmlFor="password">Password</label>
              <input
                type={passwordType ? "text" : "password"}
              
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
      )}
    </div>
  );
}

export default Signup;
