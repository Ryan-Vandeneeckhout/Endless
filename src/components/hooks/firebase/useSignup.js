import { useState } from "react";
import { auth } from "./config.js";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext.js";

export const useSignup = () => {
  //Sign up Page Logic Firebase
  const [error, setError] = useState(false);
  const { dispatch } = useAuthContext();
  const [success, setSuccess] = useState(null);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const navigate = useNavigate();

  const signup = (email, password) => {
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
        setSuccess((value) => !value);
        setSuccessText("Signup Sucessful");
        setError(false);
        navigate("/");
      })
      .catch((err) => {
        setError(true);
        setErrorText(err.message);
        setSuccess(false);

        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorText("Email already in use!");
        }
      });
  };

  return { error, signup, success, errorText, successText };
};
