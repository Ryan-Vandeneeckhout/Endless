import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const ChatIcon = (props) => {
  const [buttonHoverState, setButtonHoverState] = useState(false);
  return (
    <div
      className={`buttonSideIconContainer ${
        buttonHoverState ? "showText" : "hideText"
      }`}
      onMouseLeave={() => {
        setButtonHoverState(false);
      }}
    >
      <p
        className={`buttonSideIconContainer ${
          buttonHoverState ? "showTextButton" : "hideTextButton"
        }`}
      >
        Chat
      </p>

      <div
        className="icon"
        onClick={props.showChat}
        onMouseEnter={() => {
          setButtonHoverState(true);
        }}
      >
        <FontAwesomeIcon icon={props.chatState ? "fa-times" : "fa-comment"} />
      </div>
    </div>
  );
};
