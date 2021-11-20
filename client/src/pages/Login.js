import React, { useEffect,useState } from "react";
import {useAlert} from "react-alert"
import {useDispatch,useSelector} from "react-redux"
import { login,clearError  } from '../actions/userActions'
import eye from "../assets/eye.svg";
import { ForgotPassword } from "../Components/AccountSetup";
import ClickButton from "../Components/Button";
import MetaData from "../Components/MetaData";
import {
  container,
  form_heading,
  input_container,
  reveal__password,
  forgot_password,
  revealPassword,
  login_container,
} from "../stylesheets/login.module.css";


/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
function Login({history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const [reveal, setReveal] = useState(reveal__password);
    const [passwordType, setPasswordType] = useState(false);
    const [forgotPassword, setforgotPassword] = useState(false);
    
    const alert = useAlert()
    const dispatch = useDispatch()

    const {isAuthenticated,error} = useSelector(state=>state.authReducer)
    
    useEffect(() => {

      if(isAuthenticated){
        history.push("/");
      }
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }
    }, [dispatch,alert,isAuthenticated,error,history])

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(login(email,password))
    }

  const handlePasswordReveal = () => {
    setReveal(revealPassword);
    setPasswordType(!passwordType);
  };
    
    
    const handleForgotPassword = () => {
        setforgotPassword(true);
    }

    return (
      <>
        {forgotPassword ? (
          <>
          <MetaData title="Forgot password"/>
          <ForgotPassword />
          </>
        ) : (
          <div className={container}>
            <MetaData title="Login"/>
            <div className={login_container}>
              <form onSubmit={submitHandler}>
                <h3 className={form_heading}>Login to your account</h3>
                <div className={input_container}>
                  <label htmlFor="email">Email</label>
                  <input type="email" 
                    id="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>

                <div className={input_container}>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type={passwordType ? "text" : "password"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <button type="button" onClick={handlePasswordReveal}>
                    <img src={eye} alt="password" className={reveal} />
                  </button>
                  <button type='button' onClick={handleForgotPassword} className={forgot_password}>
                    Forgot your password?
                  </button>
                </div>
                <ClickButton variant="secondary" extended text="Log in" />
              </form>
            </div>
          </div>
        )}
      </>
    );}

export default Login;
