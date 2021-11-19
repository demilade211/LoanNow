/* eslint-disable react/prop-types */
import styles from '../stylesheets/button.module.css'

const ClickButton = ({ variant, extended, narrow, text, login,click }) => {

    let btn_style = "init--narrow";
    const btn__color = variant;

    if (btn__color === "primary" && extended === true) {
      btn_style = "primary--extended";
    } else if (btn__color === "secondary" && extended === true) {
      btn_style = "secondary--extended";
    } else if (btn__color === "primary" && narrow === true) {
      btn_style = "primary--narrow";
    } else if (btn__color === "secondary" && narrow === true) {
      btn_style = "secondary--narrow";
    } else if (btn__color === "secondary" && extended === true) {
      btn_style = "secondary--extended";
    } else if (btn__color === "white" && narrow === true) {
      btn_style = "white--narrow";
    } else if (btn__color === "neon" && extended) {
      btn_style = "neon--extended";
    } else if (btn__color === "neon" && narrow) {
      btn_style = "neon--narrow";
    } else if (btn__color === "ocean" && extended) {
      btn_style = "ocean--extended";
    } else if (btn__color === "ocean" && narrow) {
      btn_style = "ocean--narrow";
    }
  let setStyle = styles[btn_style];

  if(login) setStyle = [styles[btn_style], styles.login].join(' ');
    return (
      
        <button type="submit" className={setStyle} onClick={click} >
      {text}
    </button>
  );
};


export default ClickButton