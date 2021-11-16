import { container, input_container, form_heading, form_subheading , forgot_password_container} from "../stylesheets/setup.module.css";
import ClickButton from "./Button";

export const ForgotPassword = () => {
  return (
    <div>
      <div className={forgot_password_container}>
        <form>
          <h3 className={form_heading}>Forgot Password?</h3>
          <p className={form_subheading}>
            Not too worry, enter your email below and <br /> we will send a
            password reset link to you.
          </p>
          <div className={input_container}>
            <label htmlFor="email">Email</label>
            <input type="text" />
          </div>
          <ClickButton variant="secondary" extended text="Send Code" />
        </form>
      </div>
    </div>
  );
};

export const VerifyAccount = () => {
  return (
 
      <div className={container}>
        <form>
          <h3 className={form_heading}>Verify Account</h3>

          <div className={input_container}>
            <label htmlFor="email">Enter OTP sent to your email</label>
            <input type="text" />
          </div>
          <ClickButton variant="secondary" extended text="Finish" />
        </form>
</div>
  );
};
