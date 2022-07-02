import React, { useState } from "react";
import config from "../../config";
import FormError from "../layout/FormError";
import { Link } from "react-router-dom"

const SignInForm = () => {
  const [userPayload, setUserPayload] = useState({ email: "", password: "" });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  const validateInput = (payload) => {
    setErrors({});
    const { email, password } = payload;
    const emailRegexp = config.validation.email.regexp;
    let newErrors = {};
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (password.trim() === "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    setErrors(newErrors);
  };

  const onSubmit = async (event) => {
    event.preventDefault()
    validateInput(userPayload)
    try {
      if (Object.keys(errors).length === 0) {
        const response = await fetch("/api/v1/user-sessions", {
          method: "post",
          body: JSON.stringify(userPayload),
          headers: new Headers({
            "Content-Type": "application/json",
          })
        })
        if(!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
        const userData = await response.json()
        setShouldRedirect(true)
      }
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  if (shouldRedirect) {
    location.href = "/days";
  }

  return (
    <div className="sign-in-page" onSubmit={onSubmit}>
      <h1 className="text-center sign-in-header" >Sign In</h1>
      <form> 
        <div className="grid-container text-center sign-in-email">
          <label>
            Email
            <input type="text" name="email" value={userPayload.email} onChange={onInputChange} />
            <FormError error={errors.email} />
          </label>
        </div>
        <div className="grid-container text-center sign-in-password">
          <label >
            Password
            <input 
              type="password"
              name="password"
              value={userPayload.password}
              onChange={onInputChange}
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div  className="grid-x align-center sign-in-button ">
          <input type="submit" className="button expanded" value="Sign In" />
        </div>
      </form>
      <div className="grid-x align-center need-account">
                <Link to="/users/new" className="need-account-text" href="#">Need an Account?</Link>
            </div>
      <div className="grid-x align-center align-middle footer">© 2022 Hey How’s Your Day</div>
     
    </div>
  );
};

export default SignInForm;