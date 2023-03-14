import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import useState from "react-usestateref";

export const RotatingInfoCommericalSliderComponent = (props) => {
  const [, setCurrent, currentRef] = useState(0);
  const [, setTextH1, textH1Ref] = useState("Hot New Styles for All");
  const [, setTextSH1, textSH1Ref] = useState(
    "Checkout our newest beauty products"
  );

  useEffect(() => {
    if (props.bannerProps === true) {
      setTextH1("Hot New Styles for All");
      setTextSH1("Checkout our newest beauty products");
    } else {
      setTextH1("Sleek, Stylish, Flawless");
      setTextSH1("Check out Amanada's Tips on Beauty and Style!");
    }
  }, [props.bannerProps, setTextH1, setTextSH1]);

  if (
    props.ImageList === undefined ||
    !Array.isArray(props.ImageList) ||
    props.ImageList.length <= 0
  ) {
    return null;
  }

  const length = props.ImageList.length;
  const preSlide = () => {
    setCurrent(currentRef.current === length - 1 ? 0 : currentRef.current + 1);

    if (props.bannerProps === true) {
      ChangeText();
    } else {
      ChangeText2();
    }
  };

  const nextSlide = () => {
    setCurrent(currentRef.current === 0 ? length - 1 : currentRef.current - 1);

    if (props.bannerProps === true) {
      ChangeText();
    } else {
      ChangeText2();
    }
  };

  const onClickBar = () => {
    if (props.bannerProps === true) {
      ChangeText();
    } else {
      ChangeText2();
    }
  };

  const ChangeText = () => {
    if (currentRef.current === 0) {
      setTextH1("Hot New Styles for All");
      setTextSH1("Checkout our newest beauty products");
    }

    if (currentRef.current === 1) {
      setTextH1("Sleek, Stylish, Flawless");
      setTextSH1("Check out Amanada's Tips on Beauty and Style!");
    } else if (currentRef.current === 2) {
      setTextH1("Summertime Foundation Fun!");
      setTextSH1("step into summer with a flawless foundation!");
    }
  };

  const ChangeText2 = () => {
    if (currentRef.current === 0) {
      setTextH1("Sleek, Stylish, Flawless");
      setTextSH1("Check out Amanada's Tips on Beauty and Style!");
    }

    if (currentRef.current === 1) {
      setTextH1("Warm Summer Glow");
      setTextSH1("step into summer with a flawless foundation!");
    } else if (currentRef.current === 2) {
      setTextH1("Hot New Styles for All");
      setTextSH1("Checkout our newest beauty products");
    }
  };

  return (
    <section className="rotatingInfoCommericalSliderSection">
      <div className={`infoCommericalSliderImageContainer ${props.orderflex1}`}>
        <button
          aria-label="Prev Product"
          onClick={nextSlide}
          className="slideArrowLeft"
        >
          <FontAwesomeIcon size="2x" icon="fa-arrow-left-long" />
        </button>
        <button
          onClick={preSlide}
          aria-label="Next Product"
          className="slideArrowRight"
        >
          <FontAwesomeIcon size="2x" icon="fa-arrow-right-long" />
        </button>
        {props.ImageList.map((item, index) => {
          return (
            <div
              className={
                index === currentRef.current ? "currentSlide" : "displayNone"
              }
              key={index}
            >
              {index === currentRef.current && (
                <img src={item.imageItem} alt="makeup products demo example" />
              )}
            </div>
          );
        })}
        <div className="progressBarContainer">
          <div className="Bar">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrent(index);
                  onClickBar();
                }}
                className={
                  index === currentRef.current ? "dot greenDot" : "dot whiteDot"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`contentInfoCommericalContainer ${props.orderflex2}`}>
        <div className="wrapper">
          <h2>{textH1Ref.current}</h2>
          <h3>{textSH1Ref.current}</h3>
        </div>
      </div>
    </section>
  );
};
