import React from "react";

import './BurgerButton.css';

function BurgerButton({ onButtonClick }) {
  return(
    <button className="burger-button" title="Открыть меню" onClick={ onButtonClick }/>
  )
}

export default BurgerButton;