import TextInput from "../../inputs/TextInput";
import { updateDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../hooks/firebase/config.js";
import { useCollection } from "../../hooks/firebase/useFirestoreDatabase";

import { useRef } from "react";
import useState from "react-usestateref";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactMenuMessageItem } from "./contactMenuMessageItem";

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
    const docSnap = await getDoc(doc(db, AccountId, "Messages"));

    if (docSnap.exists()) {
      await updateDoc(doc(db, AccountId, "Messages"), {
        message: tagsArrayRef.current,
        dataNumber: AccountId,
      });
    } else {
      await setDoc(doc(db, AccountId, "Messages"), {
        message: tagsArrayRef.current,
        dataNumber: AccountId,
      });
    }
    updateScroll();
  };

  function updateScroll() {
    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  }

  const showEmailMessageFunction = () => {
    props.showChat();
  };

  const renderFirebaseMessages = () => {
    if (databaseFirestore === null || databaseFirestore.length === 0) {
      return (
        <ul>
          <ContactMenuMessageItem
            backgroundItem={"GreenB WhiteT"}
            itemUser={false}
            Text={"Welcome to Endless Demands, How can we help you today?"}
          />
          <li>Shipping</li>
          <li>Customer Support</li>
          <li>Returns</li>
        </ul>
      );
    } else {
      return (
        <ul>
          <ContactMenuMessageItem
            backgroundItem={"GreenB WhiteT"}
            itemUser={false}
            Text={"Welcome to Endless Demands, How can we help you today?"}
          />
          {databaseFirestore.map(({ message }, index) => {
            return (
              <div key={index}>
                {message ? (
                  <>
                    {message.map((item, index) => {
                      return (
                        <div key={index}>
                          <ContactMenuMessageItem
                            backgroundItem={"GreenB WhiteT"}
                            itemUser={true}
                            Text={item.messageArray}
                          />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <p>No Messages</p>
                )}
              </div>
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
            <button onClick={HandleSubmitFirebase}>
              <FontAwesomeIcon icon="fa-spa" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
