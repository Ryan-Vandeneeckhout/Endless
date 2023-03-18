import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/firebase/useLogin.js";
import { signInWithGoogle } from "../../hooks/firebase/config.js";
import EmailAndPasswordComponent from "../../inputs/EmailAndPasswordComponent.jsx";
import SectionWrappers from "../../wrappers/sectionWrappers.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFormState, setErrorFromState] = useState(false);
  const [errorFormText, setErrorFormText] = useState("Error!");

  const EmailRef = useRef(null);
  const passwordRef = useRef(null);

  const { login, error, success, errorText, successText } = useLogin();

  const HandleSubmit = (e) => {
    e.preventDefault();
    login(email, password);

    if (error === true) {
      setErrorFormText("Password Incorrect!");
    }
  };

  const signInGoogle = () => {
    signInWithGoogle();
  };

  return (
    <SectionWrappers sectionWrapperClassName="LoginSignUpSection login">
      <div className="contentItemBox">
        <div className="formBox">
          <div className="upperformSiteName">
            <h3>
              Endless <span className="colorYellow">Demands</span>
            </h3>
          </div>
          <h3>Login to Endless Demands</h3>
          <p>Welcome Back!</p>
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
            <button>Login</button>
          </form>
          <p>
            Need an account? Sign up <Link to="/signup">here</Link>{" "}
          </p>
          {errorFormState ? <p className="redText">{errorFormText}</p> : null}
        </div>

        <div className="imageItem">
          <div className="wrapper">
            <h2>
              Endless <span className="colorYellow">Demands</span>
            </h2>
            <button onClick={signInGoogle}>Sign up With Google</button>
          </div>
        </div>
      </div>
    </SectionWrappers>
  );
}
