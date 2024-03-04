'use client'

import React from 'react';

import Image from 'next/image'
import Link from 'next/link'

export default function Login() {

  const STATUS = {
    IDLE: "IDLE",
    SUBMITTED: "SUBMITTED",
    SUBMITTING: "SUBMITTING",
    COMPLETED: "COMPLETED",
  };


  const [formData, setFormData] = React.useState({
    email: "",
    password: "",

  });

  const [isStatus, setStatus] = React.useState(STATUS.IDLE);
  const [touched, setTouched] = React.useState({});
  const [finish, setFinished] = React.useState(false);
  const [loginError, setLoginError] = React.useState(null)

  const errors = getErrors();
  const isValid = Object.keys(errors).length === 0;

  function handleChg(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prevState) => {
      return {
        ...prevState,
        [name]: true,
      };
    });

  }


  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);

    if (isValid) {
      console.log("submit");
      setStatus(STATUS.COMPLETED);
      setFinished(prev => !prev)
      console.log(formData);
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  }

  function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    }
    else {
      return false;
    }
  }


  function getErrors(params) {
    const result = {}

    if (!formData.email) {
      result.email = "Email is required";
    } else if (!ValidateEmail(formData.email)) {
      result.email = "Email is not correct";
    }

    if (!formData.password) result.password = "Username is required";

    return result;
  }

  if (loginError) throw loginError


  if (isStatus === "SUBMITTING") return (<div className="container">...LOADING</div>)


  return (
    <div className='login'>
      {/* <Image
        src={"/assets/movie Svg.svg"}
        width={48}
        height={40}
        alt='movie icon'
      /> */}

      <div className="form gap">

        <p className='login-pgh'>Login</p>

        <form onSubmit={handleSubmit}>

          <div>

            <input
              type="text"
              name="email"
              placeholder="Email address"
              onChange={handleChg}
              onBlur={handleBlur}
              value={formData.email}
            />
            <p className="error" role="alert">
              {(touched.email || isStatus === STATUS.SUBMITTED) && errors.email}
            </p>

          </div>

          <br />

          <div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChg}
              onBlur={handleBlur}
              value={formData.password}
            />
            <p className="error" role="alert">
              {(touched.password || isStatus === STATUS.SUBMITTED) &&
                errors.password}
            </p>

          </div>

          <br />
          <br />

          <button
            className="subBtn"
            type="submit"
            disabled={!(formData.email || formData.password)}
          >
            Login to your account
          </button>

        </form>

        <Link href="/reset" className="links">
          <h3 className='reset-password'>
            Forgot Password?
          </h3>
        </Link>

        <span className="log-span ">

          <p> Dont have an account? </p>

          <Link className="links" href="/signup">
            <p className="signup-link">
              Sign Up
            </p>
          </Link>

        </span>

        <span className='google-signup'>
          <Image
            src={"/assests/google-icon.png"}
            width={48}
            height={40}
            alt='google icon'
            className='googleIcon'
          />

          <h3 className='google-h3'>Sign up with Google</h3>

        </span>

      </div>
    </div >
  )
}
