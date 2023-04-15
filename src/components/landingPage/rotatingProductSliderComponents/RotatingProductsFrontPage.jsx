import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { RotatingDefaultSearchesCard } from "./RotatingDefaultSearchCard";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const RotatingProductsFrontPage = (props) => {
  const [arrayList, setArray] = useState(props.arrayList);
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.1,
  });
  if (!Array.isArray(props.arrayList) || props.arrayList.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    let arrayEnd = arrayList.shift();
    setArray((curr) => [...curr, arrayEnd]);
  };

  const preSlide = () => {
    let arrayEnd = arrayList.pop();
    setArray((array) => [arrayEnd, ...array]);
  };

  return (
    <section className="productSliderSection" ref={contentItemView}>
      <div className="wrapper">
        <div className={`containerTitle ${props.orderflex1}`}>
          <div
            className={`titleCard ${
              contentItemInView ? " animationLeft" : " animationZero"
            }`}
          >
            <div className={`titleCardWrapper ${props.imageBClass}`}>
              <h2>{props.headingText ? props.headingText : "Heading Text"}</h2>
              <h3>
                {props.subHeadingText
                  ? props.subHeadingText
                  : "Sub Heading Text"}
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`productSliderContainer ${props.orderflex2} ${
            contentItemInView ? " animationLeft" : " animationZero2"
          }`}
        >
          <button
            aria-label="Previous Product"
            className="sideButtons left"
            onClick={preSlide}
          />
          <div className="productSliderCardAndButtonContainer">
            <div className="cardContainer">
              {arrayList.slice(0, 4).map((item, index) => {
                return (
                  <Link
                    to={`/${item.id}`}
                    className={`productCard`}
                    key={index}
                  >
                    <RotatingDefaultSearchesCard
                      api_featured_image={item.api_featured_image}
                      name={item.name}
                      index={index}
                      price={item.price}
                      product_colors={item.product_colors}
                      id={item.id}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="buttonContainer">
              <button aria-label="Previous Product" onClick={preSlide}>
                <span>
                  <FontAwesomeIcon icon="fa-arrow-left-long" />
                </span>
              </button>
              <button aria-label="Next Product" onClick={nextSlide}>
                {" "}
                <span>
                  <FontAwesomeIcon icon="fa-arrow-right-long" />
                </span>
              </button>
            </div>
          </div>
          <button
            className="sideButtons right"
            aria-label="Next Product"
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};
