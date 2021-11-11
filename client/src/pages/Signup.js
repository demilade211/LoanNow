/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unneeded-ternary */
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import signupImg from '../assets/rafiki.png';
import strand from '../assets/signup.png';
import { ClickButton } from "../Components/Button";
import style from '../stylesheets/signup.module.css';


const Signup = () => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [ value, setValue] = useState();
    const [passwordShown, setPasswordShown] = useState(false);
      
    
      const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstname: event.target.value });
      };
    
      const handleLastNameInputChange = (event) => {
        setValues({ ...values, lastname: event.target.value });
      };
    
      const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value });
      };
    
      const handlePasswordInputChange = (event) => {
        setValues({ ...values, password: event.target.value });
      };
    
      const handleConfirmPasswordInputChange = (event) => {
        setValues({ ...values, confirmPassword: event.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      }
    
    const togglePassword = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    return (
        <>
            <div>
                <div className = {style.left}>
                    <div className = {style.sign}>
                        <img src={signupImg} alt="" />
                    </div>
                    <div className = {style.strand}>
                        <img src= {strand} alt="" />
                    </div>
                </div>

                <div className = { style.right}>
        	        <h2>Create an account</h2>
                    <p>Kindly fill in your details to register with us</p>

                    <div className = {style.form}>
                        <form action="/" onSubmit={handleSubmit}>
                            
                            <div className = { style.section}>
                                <label htmlFor ="firstname">
                                    First Name
                                </label>
                                <input 
                                autoComplete="off"
                                onChange={handleFirstNameInputChange}
                                value={values.firstname}
                                type ="text" 
                                id = "firstname" 
                                name="firstname"
                                />
                            </div>

                            <div className = { style.section}>
                                <label htmlFor ="lastname">
                                    Last Name
                                    
                                </label>
                                <input
                                    autoComplete="off"
                                    onChange={handleLastNameInputChange}
                                    value={values.lastname}
                                    type ="text" 
                                    id = "lastname" 
                                />
                            </div>

                            <div className = { style.section}>
                                <label htmlFor ="mobile-number">
                                    Mobile Number
                                </label>
                                <PhoneInput
                                    international
                                    defaultCountry="NG"
                                    value={value}
                                    onChange={setValue}
                                />
                            </div>

                            <div className = { style.section}>
                                <label htmlFor ="email">
                                    Email
                                </label>
                                <input
                                    autoComplete="off"
                                    onChange={handleEmailInputChange}
                                    value={values.email}
                                    type ="email" 
                                    id = "email" 
                                />
                            </div>

                            <div className = { style.section}>
                                <label htmlFor ="password">
                                    Password
                                </label>

                                <input
                                    autoComplete="off"
                                    onChange={handlePasswordInputChange}
                                    value={values.password}
                                    type={passwordShown ? "text" : "password"}
                                    id = "password" 
                                   />
                                <button className = { style.btn }type = 'submit' onClick={togglePassword}>SHOW</button>
                            </div>

                            <div className = { style.section}>
                                <label htmlFor ="password">
                                    Confirm Password
                                </label>
                                <input
                                    autoComplete="off"
                                    onChange={handleConfirmPasswordInputChange}
                                    type={passwordShown ? "text" : "password"} 
                                    id = "password" />
                                <button className = { style.btn} onClick={togglePassword}>SHOW</button>
                            </div>

                            <div className = {style.button}>
                                <ClickButton text="Proceed" variant="secondary" extended />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Signup
