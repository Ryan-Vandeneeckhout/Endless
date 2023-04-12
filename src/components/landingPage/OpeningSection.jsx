import { InputGotoArrow } from "../inputs/inputGotToArrow";
import { useInView } from "react-intersection-observer";

export const OpeningSection = () => {
  const [contentItemView, contentItemInView] = useInView({});
  let buttonValueText = "foundation";

  return (
    <section className="openingPage">
      <div className="wrapper">
        <div
          className={`titleCard ${
            contentItemInView ? " animationLeft" : " animationUP"
          }`}
        >
          <h1 ref={contentItemView}>Be Fierce, Be Bold, Be You!</h1>
          <p>
            {`Get Started today and visit the ultimate destination for all your makeup needs! `}
          </p>
          <InputGotoArrow link={`content/${buttonValueText}`} />
        </div>
      </div>
    </section>
  );
};
