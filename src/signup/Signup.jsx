import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase_init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Signup = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    createUserWithEmailAndPassword(auth, email, password, terms)
      .then((result) => {
        console.log(result);
        sendEmailVerification(auth.currentUser).then(()=>{
          setSuccess(true);
          alert("please verify your email address")
        })
       
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    setSuccess(false);
    setErrorMessage("");
    if (!terms) {
      setErrorMessage("please accept our terms and condition");
      
      return;
    }

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
        <h1 className="text-2xl font-bold">Please sign up</h1>
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label mt-3">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="btn bg-black text-white btn-xs absolute top-2 right-6"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <label className="label mt-3">
            <input type="checkbox" name="terms" className="checkbox " />
            Accept terms and conditions
          </label>{" "}
          <br />
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
        <p>Already have an account? Please <Link className="text-blue-400 underline" to={"/login"}>Log In</Link></p>
        {errorMessage && <p className="text-red-400">{errorMessage}</p>}
        {success && <p className="text-green-500">user succefully sign up</p>}
      </div>
    </div>
  );
};

export default Signup;
