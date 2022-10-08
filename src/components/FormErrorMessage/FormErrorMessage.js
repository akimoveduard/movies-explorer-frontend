import React from "react";

import './FormErrorMessage.css'

function FormErrorMessage({
  formErrorMessage
}) {

  return(
    <p className="form-error-message">{formErrorMessage}</p>
  );
}

export default FormErrorMessage;
