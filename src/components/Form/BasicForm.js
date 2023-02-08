import useInput from "../../hooks/use-input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
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
  const {
    value: conPassValue,
    isValid: conPassIsValid,
    hasError: conPassHasError,
    valueChangeHandler: conPassChangeHandler,
    inputBlurHandler: conPassBlurHandler,
    reset: resetConPass,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passIsValid &&
    conPassIsValid
  ) {
    formIsValid = true;
  }
  const [conPassError, setConPassHasError] = useState(false);
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    if (passValue !== conPassValue) {
      setConPassHasError(true);
      resetConPass();
      return;
    }

    if (formIsValid) {
      resetFirstName();
      resetLastName();
      resetEmail();
      resetPass();
      resetConPass();
      setConPassHasError(false);
      history.push("/scontent");
      return console.log(
        firstNameValue,
        lastNameValue,
        emailValue,
        passValue,
        conPassValue
      );
    }
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passClasses = passHasError ? "form-control invalid" : "form-control";
  const conPassClasses =
    conPassHasError || conPassError ? "form-control invalid" : "form-control";

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className="names">
            <div className={firstNameClasses}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="fname"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className="error-text">Please enter a first name.</p>
              )}
            </div>
            <div className={lastNameClasses}>
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                id="lname"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className="error-text">Please enter a last name.</p>
              )}
            </div>
          </div>
          <div className={emailClasses}>
            <label htmlFor="name">E-Mail Address</label>
            <input
              type="text"
              id="text"
              name="email"
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
              name="pass"
              value={passValue}
              onChange={passChangeHandler}
              onBlur={passBlurHandler}
            />
            {passHasError && (
              <p className="error-text">Please enter a password.</p>
            )}
          </div>
          <div className={conPassClasses}>
            <label htmlFor="name">Confirm Password</label>
            <input
              type="text"
              id="password2"
              name="conpass"
              value={conPassValue}
              onChange={conPassChangeHandler}
              onBlur={conPassBlurHandler}
            />
            {conPassHasError && (
              <p className="error-text">Please enter a confirm password.</p>
            )}
            {conPassError && (
              <p className="error-text">Please match password.</p>
            )}
          </div>
          <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
            <div className="signup">
              <p>Sig Up With </p>
              <Link to="/register">Google</Link>
            </div>
            <hr />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
