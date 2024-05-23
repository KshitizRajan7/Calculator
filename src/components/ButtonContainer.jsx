import React from "react";
import style from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttonNames = [
    "9",
    "8",
    "7",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    ".",
    "+",
    "="
  ];
  return (
    <div>
      <div className={style.buttonContainer}>
        {buttonNames.map((buttonName) => 
           <button className={style.button}>{buttonName}</button>
        )}
      </div>
    </div>
  );
};

export default ButtonContainer;
