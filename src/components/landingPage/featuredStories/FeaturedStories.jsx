import { Link } from "react-router-dom";
import { ImageList1 } from "../rotatingInfoCommericalSliderComponents/ImageList1";

export const FeaturedStories = () => {
  return (
    <section className="FeaturedStoriesSection">
      <div className="wrapper">
        <h2>Featured Stories</h2>
        <div className="contentContainer">
          {ImageList1.map((item, index) => {
            return (
              <Link key={index}>
                <img src={item.imageItem} alt="makeup products demo example" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
