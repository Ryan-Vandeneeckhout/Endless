import { Link } from "react-router-dom";
import { TextInputWithButton } from "../inputs/TextInputWithButton";
import { ImageList2 } from "../landingPage/rotatingInfoCommericalSliderComponents/ImageList2";

export const FeaturedStoriesLandingPage = (props) => {
  return (
    <section className="featuredStoriesLandingPage">
      <div className="wrapper">
        <h2>Featured Stories</h2>
        <h4>
          <Link to="\">Top</Link>
          <span> {`>`} </span>Featured Stories
        </h4>

        <div className="contentList">
          <div className="content">
            {ImageList2.map((item, index) => {
              return (
                <div className="storyItem" key={index}>
                  <div
                    className="imageContainer"
                    style={{ backgroundImage: `url(${item.imageItem})` }}
                  />
                  <h3>My Dress-up darling: An Interview with the director</h3>

                  <div className="contentPreview">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error, eaque unde. Non dolor exercitationem fugiat
                      expedita, quidem facilis minima fuga ullam neque ut
                      repellat deleniti culpa, provident architecto aspernatur
                      eveniet!
                    </p>
                    <div className="bottomRow">
                      <p>Posted By Ryan</p>
                      <p>Pub Date: Febuary 17 2022</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <aside>
            <h4>Search Featured Articles</h4>
            <TextInputWithButton />
          </aside>
        </div>
      </div>
    </section>
  );
};
