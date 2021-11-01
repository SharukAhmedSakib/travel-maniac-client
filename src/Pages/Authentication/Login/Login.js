import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const {
    signInUsingGoogle,
    // error,
    // isLogin,
    // handleRegistration,
    // handleNameChange,
    // handleEmailChange,
    // handlePasswordChange,
    // toggleLogin,
    // handleResetPassword,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form mx-auto">
      {/* <form onSubmit={handleRegistration}>
        <h3 className="text-primary p-5">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        {!isLogin && (
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                onBlur={handleNameChange}
                className="form-control"
                id="inputName"
                placeholder="Your Name"
              />
            </div>
          </div>
        )}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              onBlur={handlePasswordChange}
              className="form-control"
              id="inputPassword3"
              placeholder="Your Password"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check d-flex">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label mx-2" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="animated-button">
            {isLogin ? "Login" : "Register"}
          </button>
          <button
            type="button"
            onClick={handleResetPassword}
            className="animated-button"
          >
            Reset Password
          </button>
        </div>
      </form> */}
      <button className="login-with-google-btn" onClick={handleGoogleLogin}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
