import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactMenuMessageItem = (props) => {
  return (
    <div className={`messageItem${props.itemUser ? " flexRR" : " flexrow"}`}>
      <div className="iconUser">
        <FontAwesomeIcon icon="fa-spa" />
      </div>
      <p className={props.backgroundItem}>{props.Text}</p>
    </div>
  );
};
