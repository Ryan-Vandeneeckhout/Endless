import { InputGotoArrow } from "../inputs/inputGotToArrow";

export const OpeningSection = () => {
  let buttonValueText = "foundation";

  return (
    <section className="openingPage">
      <div className="wrapper">
        <div className="titleCard">
          <h1>Be Fierce, Be Bold, Be You!</h1>
          <p>
            {`Get Started today and visit the ultimate destination for all your makeup needs! `}
          </p>
          <InputGotoArrow link={`content/${buttonValueText}`} />
        </div>
      </div>
    </section>
  );
};
