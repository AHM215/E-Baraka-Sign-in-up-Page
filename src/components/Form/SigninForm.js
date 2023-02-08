import useInput from "../../hooks/use-input";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  const history = useHistory();

  if (emailIsValid && passIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    if (formIsValid) {
      event.preventDefault();
      resetEmail();
      resetPass();
      history.push("/scontent");
    }
  };

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passClasses = passHasError ? "form-control invalid" : "form-control";

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className={emailClasses}>
            <label htmlFor="name">E-Mail Address</label>
            <input
              type="text"
              id="text"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>
          <div className={passClasses}>
            <label htmlFor="name">Password</label>
            <input
              type="text"
              id="password0"
              value={passValue}
              onChange={passChangeHandler}
              onBlur={passBlurHandler}
            />
            {passHasError && (
              <p className="error-text">Please enter a password.</p>
            )}
          </div>

          <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
            <div className="signup">
              <p>Don't Have an account? </p>
              <Link to="/register">Sign up</Link>
            </div>
            <hr />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
