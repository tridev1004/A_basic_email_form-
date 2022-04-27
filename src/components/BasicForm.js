import useInput from "../Hooks/use-input";
const isnotEmpty = (value) => value.trim() !== '';

const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isvalid: firstNameisvalid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNamechangeHandler,
    InputBlurHandler: firstNameBlurHandler,
    reset: resetfirstName,
  } = useInput(isnotEmpty);
  const {
    value: SecondNameValue,
    isvalid: SecondNameisvalid,
    hasError: SecondNameHasError,
    valueChangeHandler: SecondNamechangeHandler,
    InputBlurHandler: SecondNameBlurHandler,
    reset: resetSecondName,
  } = useInput(isnotEmpty);
  const {
    value: emailValue,
    isvalid: emailisvalid,
    valueChangeHandler: emailchangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: resetemail,
    hasError: emailHasError,
  } = useInput(isEmail);
  let formisvalid = false;
  if (firstNameisvalid && SecondNameisvalid && emailisvalid) {
    formisvalid = true;
  }
  const firstnameclasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const Secondnameclasses = SecondNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailclasses = emailHasError ? "form-control invalid" : "form-control";

  const submithandler = (event) => {
    event.preventDefault();

    if (!formisvalid) {
      return;
    }
    console.log("submitted");
    console.log(firstNameValue, SecondNameValue, emailValue);
    resetfirstName();
    resetSecondName();
    resetemail();
  };
  return (
    <form onSubmit={submithandler}>
        <div className="control-group">
      <div className={firstnameclasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNamechangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please Enter a First name</p>}
        </div>
        <div className={Secondnameclasses}>
          
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={SecondNameValue}
            onChange={SecondNamechangeHandler}
            onBlur={SecondNameBlurHandler}
          />
          {SecondNameHasError && <p  className="error-text">Please Enter a last name</p>}
        </div>
      </div>
      <div className={emailclasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailchangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p  className="error-text">Please Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
