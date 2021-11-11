/* eslint-disable react/prop-types */
// import { useState } from "react";
import styles from "../stylesheets/button.module.css";

export const SubmitButton = ({ variant, extended, narrow, text }) => {
  let btn_style = "init--narrow";
  const btn__color = variant;
  
    if (btn__color === "primary" && extended === true) {
      btn_style = "primary--extended";
    } else if (btn__color === "secondary" && extended === false) {
      btn_style = "secondary-extended";
    } else if (btn__color === "primary" && narrow === true) {
      btn_style = "primary--narrow";
    } else if (btn__color === "secondary" && narrow === false) {
      btn_style = "secondary--narrow";
    } else {
      btn_style = "init--narrow";
    }
  
const setStyle = styles[btn_style]
  return (
    <button type="submit" style={setStyle}>
      <p>{text}</p>
    </button>
  );
};

export const ClickButton = ({ variant, extended, narrow, text }) => {

    let btn_style = "init--narrow";
    const btn__color = variant;

    if (btn__color === "primary" && extended === true) {
        btn_style = "primary--extended";
    } else if (btn__color === "secondary" && extended === true) {
        btn_style = "secondary--extended";
    } else if (btn__color === "primary" && narrow === true) {
        btn_style = "primary--narrow";
    } else if (btn__color === "secondary" && narrow === false) {
        btn_style = "secondary--narrow";
    } else if(btn__color==="secondary" ){
        btn_style = "primary--extended";
    }
  const setStyle = styles[btn_style];
    return (
      
        <button type="submit" className={setStyle}>
      {text}
    </button>
  );
};
