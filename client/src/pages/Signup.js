import React, { useEffect,useState } from "react";
import {useAlert} from "react-alert"
import {useDispatch,useSelector} from "react-redux"
import { registerUser,clearError  } from '../actions/userActions'
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

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
function Signup({history}) {
  const user_verify = false;
  const alert = useAlert();
  const dispatch = useDispatch()
  
  const [success, setSuccess] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  })
  const [reveal, setReveal] = useState(reveal__password);
  const [passwordType, setPasswordType] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState(false);

  const name = `${firstName} ${lastName}`

  const {email,phoneNumber,password,confirmPassword} = user;

  const {isAuthenticated,error} = useSelector(state=>state.authReducer)

  useEffect(() => {

    if(isAuthenticated){
      setSuccess(true)
    }

    if (error) {
        alert.error(error);
        dispatch(clearError());
    }
}, [dispatch,alert,isAuthenticated,error,history])

const submitHandler = (e)=>{
    e.preventDefault();

    const  form ={name,...user}

    dispatch(registerUser(form))
}

const onChange = (e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
}

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
          path='/'
          target='Go to Dashboard'
        />
      )}
      {!user_verify && !success && (
        <div className={signup_container}>
          <form onSubmit = {submitHandler}>
            <p className={form_heading}>Create an account</p>

            <p className={form_subheading}>
              Kindly fill in your details to register with us
            </p>
            <div className={input_container}>
              <label htmlFor="firstname">First Name</label>
              <input type="text"  id="firstname" onChange={(e)=>setFirstName(e.target.value)} />
            </div>

            <div className={input_container}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text"  id="lastname" onChange={(e)=>setLastName(e.target.value)}/>
            </div>

            <div className={input_container}>
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" name="phoneNumber" value={phoneNumber} id="mobile" onChange={onChange} />
            </div>

            <div className={input_container}>
              <label htmlFor="email" >Email</label>
              <input type="text" name="email" value={email} id="email" onChange={onChange} />
            </div>

            <div className={input_container}>
              <label htmlFor="password" >Password</label>
              <input
                type={passwordType ? "text" : "password"}
              
                id="password"
                name="password"
                value = {password}
                onChange={onChange}
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
                name= "confirmPassword"
                value = {confirmPassword}
                onChange={onChange}
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
