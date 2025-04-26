import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase_init";

const Signup = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    setSuccess(true);
    setErrorMessage("");

    const passwordRegExp = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (passwordRegExp.test(password) === false) {
    
      setErrorMessage(
        "Password Must be more than 6 characters, including number, lowercase letter, uppercase letter"
      );
    }
  };

  return (
    <div className="card bg-base-100 mx-auto mt-12 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please sign up</h1>
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label mt-3">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
        {errorMessage && <p className="text-red-400">{errorMessage}</p>}
        {success && <p className="text-green-500">user succefully sign up</p>}
      </div>
    </div>
  );
};

export default Signup;
