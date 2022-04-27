import { useState } from "react";


const useInput = (validateValue) => {
  const [enteredvalue, setEnteredvalue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredvalue);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredvalue(event.target.value);
  };

  const InputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset=()=>{
      setEnteredvalue('')
      setIsTouched(false);
  }
  return {
    value: enteredvalue,
    hasError,
    valueChangeHandler,
    InputBlurHandler,
    isvalid:valueIsValid,
    reset
  };
};

export default useInput;
