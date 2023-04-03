import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const IndividualProductInformationPageCard = (props) => {
  const [cardOpen, setCardOpen] = useState(props.cardState);

  const ShowCardContent = () => {
    setCardOpen((cardOpen) => !cardOpen);
  };

  return (
    <div className="productInfoCard">
      <div className="header">
        <h3>{props.headerCardText}</h3>
        <button onClick={ShowCardContent}>
          <FontAwesomeIcon icon={`${cardOpen ? "fa-minus" : "fa-plus"}`} />
        </button>
      </div>
      <div className={`contentCard${cardOpen ? " addHeight" : " not"}`}>
        <div className="contentRight">
          <p>Item: {props.productid}</p>
          <a href={props.product_link}>Real Link to Product Displayed</a>
          <a href={props.website_link}>Link to Product Website</a>
        </div>
        <div className="contentLeft">
          <h4>What it is</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
