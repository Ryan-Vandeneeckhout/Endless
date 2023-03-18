import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChatIcon = (props) => {
  return (
    <div className="chatIcon" onClick={props.showChat}>
      <FontAwesomeIcon icon={props.chatState ? "fa-times" : "fa-comment"} />
    </div>
  );
};
