import { InputGotoArrow } from "../inputs/inputGotToArrow";
import { useInView } from "react-intersection-observer";

export const OpeningSection = () => {
  const [contentItemView, contentItemInView] = useInView({});
  let buttonValueText = "foundation";
  let h1Text = "Be Fierce, Be Bold, Be You!";
  let PText =
    "Get started today and visit the ultimate destination for all your makeup needs!";

  return (
    <section className="openingPage">
      <div className="wrapper">
        <div
          className={`titleCard ${
            contentItemInView ? " animationLeft" : " animationUP"
          }`}
        >
          <h1 ref={contentItemView}>{h1Text}</h1>
          <h4>{PText}</h4>
          <InputGotoArrow link={`content/${buttonValueText}`} />
        </div>
      </div>
    </section>
  );
};
