import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase_init";
import { Link } from "react-router";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccess(false);
    setErrorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("please verify your email address.");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleForgotPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    setErrorMessage("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("A email new email password sent to your email..");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-12">
      <div className="card-body">
        <h1 className="text-2xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div onClick={handleForgotPassword}>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          New to this website?{" "}
          <Link className="text-blue-500 underline" to="/signup">
            Sign Up
          </Link>
        </p>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {success && (
          <p className="text-green-500">User Logged in Successfully</p>
        )}
      </div>
    </div>
  );
};

export default Login;
