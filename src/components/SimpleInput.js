import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangedHandler,
    InputBlurHandler: nameInputBluredHandler,
    isvalid: enteredNameIsValid,
    reset: resetnameinput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangedHandler,
    InputBlurHandler: emailInputBluredHandler,
    isvalid: enteredemailIsValid,
    reset: resetemailinput,
  } = useInput((value) => value.includes("@"));

  let formisvalid = false;
  if (enteredNameIsValid && enteredemailIsValid) {
    formisvalid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    resetnameinput(); /// clear the form after submit;

    resetemailinput(); /// clear the form after submit;
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangedHandler}
          onBlur={nameInputBluredHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangedHandler}
          onBlur={emailInputBluredHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
