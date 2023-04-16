import { Link } from "react-router-dom";
import { useState } from "react";
import { TextInputWithButton } from "../inputs/TextInputWithButton";
import { FooterNavMap } from "./footerNavMap";
import { arrayUnion } from "firebase/firestore";
import { updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../hooks/firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = (props) => {
  const [email, setEmail] = useState("");

  const writeUserData = async (e) => {
    e.preventDefault();
    props.setPromptState(true);
    if (email.length > 5 || email.includes("@")) {
      props.setPromptBodyTextState(
        "Thank you for your sign up, however Endless Demands is not a real makeup store, therefore, expect no email for discounts."
      );
      props.setPromptHeadingTextState("Thank You!");
      const docSnap = await getDoc(doc(db, "emailList", "emailListNewsletter"));

      if (docSnap.exists()) {
        await updateDoc(doc(db, "emailList", "emailListNewsletter"), {
          emailList: arrayUnion(email),
        });
      } else {
        await setDoc(doc(db, "emailList", "emailListNewsletter"), {
          emailList: [email],
        });
      }
    } else {
      props.setPromptBodyTextState(
        "Please check your email and try again. Email must include an @ symbol and be minmum length of 5 characters!"
      );
      props.setPromptHeadingTextState("Error: Something went wrong!");
    }
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="credits">
          <h3 className="creditsHeading">
            Endless<span className="colorCredits">Demands</span>.com
            <span>
              {" "}
              <FontAwesomeIcon icon="fa-spa" color="goldenrod" />
            </span>
          </h3>
          <p>Created by Ryan Van Den Eeckhout.</p>
          <p>Copyright &copy; EndlessDemands.com. </p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="newlettersignup">
          <h3>
            SIGN UP FOR OUR{" "}
            <span style={{ color: "goldenrod" }}>NEWSLETTER</span>
          </h3>
          <p>Get notified about our latest arrivals and special offers.</p>
          <TextInputWithButton
            callFunctionProps={writeUserData}
            buttonNeeded={true}
            placeholderInput="Enter Email"
            TextButton="Subscribe"
            setTextInput={setEmail}
          />
        </div>
        <aside>
          <ul>
            {FooterNavMap.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.NavLink}>{item.NavButton}</Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </footer>
  );
};
