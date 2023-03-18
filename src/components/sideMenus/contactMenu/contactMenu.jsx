import EditorTextArea from "../../inputs/EditorTextArea";
import TextInput from "../../inputs/TextInput";
import { updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../hooks/firebase/config.js";
import { useCollection } from "../../hooks/firebase/useFirestoreDatabase";

import { useRef } from "react";
import useState from "react-usestateref";

export const ContactMenu = (props) => {
  const [showEmailMessage, setShowEmailMessage] = useState(false);

  const [tagsarray, setTagsArray, tagsArrayRef] = useState([]);
  const [, setTagValue, tagValueRef] = useState(null);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef();

  const AccountId = window.localStorage.getItem("dataNumber");
  const { databaseFirestore } = useCollection(AccountId, [
    "dataNumber",
    "==",
    AccountId,
  ]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const HandleSubmitFirebase = (event) => {
    setTagValue({ messageArray: message });
    setTagsArray(() => [...tagsarray, tagValueRef.current]);
    event.preventDefault();
    writeUserData();
  };

  const writeUserData = async () => {
    console.log(databaseFirestore);
    if (
      databaseFirestore === null ||
      databaseFirestore === undefined ||
      databaseFirestore.length === 0
    ) {
      await setDoc(doc(db, AccountId, "Messages"), {
        message: tagsArrayRef.current,
        dataNumber: AccountId,
      });
    } else {
      await updateDoc(doc(db, AccountId, "Messages"), {
        message: tagsArrayRef.current,
        dataNumber: AccountId,
      });
    }
  };

  const showEmailMessageFunction = () => {
    setShowEmailMessage((x) => !x);
  };

  const renderFirebaseMessages = () => {
    if (databaseFirestore === null) {
      return <p>No messages</p>;
    } else {
      return (
        <ul>
          {databaseFirestore.map(({ message }) => {
            return (
              <>
                {message ? (
                  <>
                    {message.map((item, index) => {
                      return (
                        <div className="subMenuButtons">
                          <p>{item.messageArray}</p>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <p>No Messages</p>
                )}
              </>
            );
          })}
        </ul>
      );
    }
  };
  return (
    <section
      className={`contactMenu${
        props.showMenu ? " displayFlex" : " displayNone"
      }`}
    >
      <div className="upperContent">
        <button onClick={showEmailMessageFunction}>X</button>
        <h5>Endless Demand</h5>
      </div>
      <div className="wrapper">
        {showEmailMessage ? (
          <form
            action="https://formspree.io/f/mjvlvgad"
            method="POST"
            ref={formRef}
            onSubmit={HandleSubmit}
          >
            <TextInput
              setTextInput={setEmail}
              labelText="Email:"
              placeholderInput="email"
            />
            <EditorTextArea setMessage={setMessage} />
            <button onClick={HandleSubmit}>Submit</button>
          </form>
        ) : (
          <>
            <div className="messageContainer">{renderFirebaseMessages()}</div>
            <form ref={formRef}>
              <div className="inputContactContainer">
                <TextInput
                  setTextInput={setMessage}
                  placeholderInput="send a message..."
                />
                <button onClick={HandleSubmitFirebase}>Send</button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};
