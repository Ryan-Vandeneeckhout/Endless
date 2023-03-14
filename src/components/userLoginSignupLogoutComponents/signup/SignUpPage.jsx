import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../hooks/firebase/config.js";
import { useSignup } from "../../hooks/firebase/useSignup.js";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput.jsx";
import EmailAndPasswordComponent from "../../inputs/EmailAndPasswordComponent.jsx";
import SectionWrappers from "../../wrappers/sectionWrappers.jsx";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [errorFormState, setErrorFromState] = useState(false);
  const [errorFormText, setErrorFormText] = useState("Error!");

  const EmailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const { signup, error, success, errorText, successText } = useSignup();

  const HandleSubmit = (e) => {
    e.preventDefault();

    const rx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password === passwordCheck) {
      if (password.match(rx)) {
        signup(email, password);
        setErrorFromState(false);
      } else {
        passwordRef.current.classList.add("redTextO");
        confirmPasswordRef.current.classList.add("redTextO");
        setErrorFromState(true);
        setErrorFormText(
          "Password must include a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        );
      }
    } else {
      passwordRef.current.classList.add("redTextO");
      confirmPasswordRef.current.classList.add("redTextO");
      setErrorFromState(true);
      setErrorFormText("Passwords must match!");
    }
  };

  return (
    <SectionWrappers sectionWrapperClassName="LoginSignUpSection signup">
      <div className="contentItemBox">
        <div className="formBox">
          <div className="upperformSiteName">
            <h3>
              Endless <span className="colorYellow">Demands</span>
            </h3>
          </div>
          <h3>Sign Up</h3>
          <p>
            Sign up today and enjoy exclusive first access to Endless Demands's
            news and special discounts and products!
          </p>
          {success ? <p>{successText}</p> : null}
          {error ? <p>{errorText}</p> : null}
          <form className="" onSubmit={HandleSubmit}>
            <EmailAndPasswordComponent
              password={password}
              email={email}
              setEmail={setEmail}
              InputRef={passwordRef}
              EmailRef={EmailRef}
              setPassword={setPassword}
              setErrorFromState={setErrorFromState}
            />
            <EmailAndPasswordInput
              valueInput="Repeat Password"
              valueText="Repeat Password"
              setValue={setPasswordCheck}
              InputRef={confirmPasswordRef}
              value={passwordCheck}
              setErrorFromState={setErrorFromState}
            />
            <button>Sign up</button>
          </form>
          <p>Already have an account? </p>
          <p>
            Login <Link to="/login">here</Link>
          </p>
          {errorFormState ? <p className="redText">{errorFormText}</p> : null}
        </div>

        <div className="imageItem">
          <div className="wrapper">
            <h2>
              Endless <span className="colorYellow">Demands</span>
            </h2>
            <h4>Sign up with your favourite social media</h4>
            <div onClick={signInWithGoogle} className="signInIcon">
              <img
                src="./assets/images/signup&LoginPagesImages/googleIcon48.png"
                alt="google icon for signup"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </SectionWrappers>
  );
}
