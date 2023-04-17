import { useState } from "react";
import { OpeningSection } from "./OpeningSection";
import { RotatingProductsFrontPage } from "./rotatingProductSliderComponents/RotatingProductsFrontPage";
import { LipStickDefaultSearches } from "../landingPage/rotatingProductSliderComponents/defaultSearches/LipstickDefaultSearches.jsx";
import { FoundationDefaultSearches } from "../landingPage/rotatingProductSliderComponents/defaultSearches/FoundationDefaultSearches.jsx";
import { RotatingInfoCommericalSliderComponent } from "./rotatingInfoCommericalSliderComponents/rotatingInfoCommericalSliderComponent";
import { ImageList1 } from "./rotatingInfoCommericalSliderComponents/ImageList1";
import { ImageList2 } from "./rotatingInfoCommericalSliderComponents/ImageList2";
import { FeaturedCategories } from "./featuredCategories/FeaturedCatogories";
import { Survey } from "../survey/Survey";
import { FeaturedStories } from "./featuredStories/FeaturedStories";

export const LandingPage = (props) => {
  const [textH1, setTextH1] = useState("Hot New Styles for All");
  const [textSH1, setTextSH1] = useState("Checkout our newest beauty products");

  const [textH2, setTextH2] = useState("Sleek, Stylish, Flawless");
  const [textSH2, setTextSH2] = useState(
    "Check out Amanada's Tips on Beauty and Style!"
  );
  return (
    <section className="landingPage">
      <OpeningSection />
      <section className="discounts">
        <p>15% off all NYX products storewide!</p>
      </section>
      <section
        className="contentContainerLandingPage"
        ref={props.contentItemViewNav}
      >
        <RotatingProductsFrontPage
          headingText="Our Newest Lipsticks"
          subHeadingText="Styles that will bring out the best You!"
          arrayList={LipStickDefaultSearches}
          orderflex1="Order1"
          imageBClass="lipstickBackgroundImage"
          orderflex2="Order2"
        />
        <RotatingInfoCommericalSliderComponent
          bannerProps={true}
          setTextH1={setTextH1}
          setTextSH1={setTextSH1}
          textH1={textH1}
          textSH1={textSH1}
          ImageList={ImageList2}
          orderflex1="Order1"
          orderflex2="Order2"
        />
        <FeaturedStories />
        <RotatingProductsFrontPage
          headingText="Hot and Creamy"
          subHeadingText="The Flawless Foundation to build on has just Arrived!"
          arrayList={FoundationDefaultSearches}
          imageBClass="foundationBackgroundImage"
          orderflex1="Order2"
          orderflex2="Order1"
        />
        <RotatingInfoCommericalSliderComponent
          bannerProps={false}
          setTextH1={setTextH2}
          setTextSH1={setTextSH2}
          textH2={textH2}
          textSH2={textSH2}
          ImageList={ImageList1}
          orderflex1="Order2"
          orderflex2="Order1"
        />
        <FeaturedCategories />
        <Survey
          text={"Website feedback? Let us know "}
          ShowSurveyFunction={props.ShowSurveyFunction}
        />
      </section>
    </section>
  );
};
