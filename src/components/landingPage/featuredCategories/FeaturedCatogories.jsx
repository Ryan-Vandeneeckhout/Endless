import { Link } from "react-router-dom";
import { MakeupMap } from "../../navigation/submenuMaps/makeupMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSlideLeftSlideRight } from "../../hooks/slider/useSlideLeftSlideRight";
import { useInView } from "react-intersection-observer";

export const FeaturedCategories = () => {
  const [contentItemView, contentItemInView] = useInView({});
  const { nextSlide, preSlide, arrayList } = useSlideLeftSlideRight(MakeupMap);

  if (!Array.isArray(MakeupMap) || MakeupMap.length <= 0) {
    return null;
  }

  return (
    <section className="featuredCategoriesSection">
      <div className="wrapper">
        <h2>Featured Categories</h2>
        <div className={`gallerySliderContainer `}>
          <ul
            className={` ${
              contentItemInView ? " animationLeft" : " animationUP"
            }`}
            ref={contentItemView}
          >
            {arrayList.slice(0, 4).map((item, index) => {
              return (
                <Link
                  to={`content/${item.buttonValueText}`}
                  className="slide"
                  key={index}
                >
                  <div className="imageContainer">
                    <img
                      src={item.imageItem}
                      alt={`Featured Catogory ${item.buttonText}`}
                    />
                  </div>
                  <h3>{item.buttonText}</h3>
                </Link>
              );
            })}
          </ul>

          <div className="buttonContainer">
            <button
              aria-label="Previous Product"
              className={` ${
                contentItemInView ? " animationLeft" : " animationZero"
              }`}
              onClick={preSlide}
            >
              <span>
                <FontAwesomeIcon icon="fa-arrow-left-long" />
              </span>
            </button>
            <button
              aria-label="Next Product"
              className={` ${
                contentItemInView ? " animationLeft" : " animationZero"
              }`}
              onClick={nextSlide}
            >
              {" "}
              <span>
                <FontAwesomeIcon icon="fa-arrow-right-long" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
