import TextInput from "../../inputs/TextInput";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../hooks/firebase/config.js";
import { useCollection } from "../../hooks/firebase/useFirestoreDatabase";

import { useRef } from "react";
import useState from "react-usestateref";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactMenu = (props) => {
  const [tagsarray, setTagsArray, tagsArrayRef] = useState([]);
  const [, setTagValue, tagValueRef] = useState(null);
  const [message, setMessage] = useState("");

  const formRef = useRef();
  const messageRef = useRef();

  const AccountId = window.localStorage.getItem("dataNumber");
  const { databaseFirestore } = useCollection(AccountId, [
    "dataNumber",
    "==",
    AccountId,
  ]);

  const HandleSubmitFirebase = (event) => {
    setTagValue({ messageArray: message });
    setTagsArray(() => [...tagsarray, tagValueRef.current]);
    event.preventDefault();
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, AccountId, "Messages"), {
      message: tagsArrayRef.current,
      dataNumber: AccountId,
    });

    updateScroll();
  };

  function updateScroll() {
    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  }

  const showEmailMessageFunction = () => {
    props.showChat();
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
      className={`contactMenu${props.showMenu ? " slideUp" : " slideDown"}`}
    >
      <div className="upperContent">
        <button onClick={showEmailMessageFunction}>
          <FontAwesomeIcon icon={"fa-caret-down"} />
        </button>
        <h5>Endless Demand</h5>
      </div>
      <div className="wrapper">
        <div className="messageContainer" ref={messageRef}>
          {renderFirebaseMessages()}
        </div>
        <form ref={formRef}>
          <div className="inputContactContainer">
            <TextInput
              setTextInput={setMessage}
              placeholderInput="send a message..."
            />
            <button onClick={HandleSubmitFirebase}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};
