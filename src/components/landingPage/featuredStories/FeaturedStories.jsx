import { Link } from "react-router-dom";
import { ImageList1 } from "../rotatingInfoCommericalSliderComponents/ImageList1";

export const FeaturedStories = () => {
  return (
    <section className="FeaturedStoriesSection">
      <div className="wrapper">
        <h2>
          <span
            style={{
              color: "goldenrod",
            }}
          >
            Featured{" "}
          </span>
          Stories
        </h2>
        <div className="contentContainer">
          {ImageList1.map((item, index) => {
            return (
              <Link key={index}>
                <img src={item.imageItem} alt="makeup products demo example" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit amet iste delectus ipsa doloremque. Est asperiores
                  sapiente hic necessitatibus ut saepe architecto sint sunt
                  quidem, tenetur repudiandae consequatur beatae cum? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Libero eius
                  quod tempore impedit veniam, quos esse magnam soluta ex
                  pariatur sapiente accusamus odit sint earum ducimus distinctio
                  repellendus facilis possimus? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quis ad assumenda, iure dicta ea
                  esse tempore ipsa dolore perferendis ullam ex quasi
                  voluptatibus saepe at porro officia autem optio sunt!
                </p>
                <div className="postCreationData">
                  <p>By Febri</p>
                  <p>
                    <span>42003 Views</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
