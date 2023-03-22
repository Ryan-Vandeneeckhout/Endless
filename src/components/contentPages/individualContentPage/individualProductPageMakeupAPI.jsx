import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const IndividualProductPageMakeupAPI = () => {
  const [individualProducts, setIndividualProduct] = useState({});
  const itemid = useParams();

  //Auto Scroll User to Top if needed//
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios({
      url: `https://web-production-5976.up.railway.app/https://makeup-api.herokuapp.com/api/v1/products/${itemid.id}.json`,
    }).then((response) => {
      setIndividualProduct(response.data);
    });
  }, [itemid.id]);
  //Destructure the passed props of indidvualproducts
  const {
    api_featured_image,
    description,
    product_link,
    id,
    brand,
    name,
    rating,
    tag_list,
    product_colors,
    product_type,
    price,
    image_link,
  } = individualProducts;

  //render if the product has aviable colours map
  const renderColors = () => {
    if (!product_colors);
    else {
      return (
        <div className="colorContainer">
          {product_colors.slice(0, 18).map((product) => {
            return (
              <div className="colourItem" key={product.hex_value}>
                <div
                  className="colourCircle"
                  style={{ background: `${product.hex_value}` }}
                >
                  {product.hex_value}
                </div>
                <p>{product.colour_name}</p>
              </div>
            );
          })}

          {showMoreColors(product_colors)}
        </div>
      );
    }
  };

  const showMoreColors = (product_colors) => {
    if (product_colors.length > 18) {
      return <button>Show More</button>;
    }
  };
  const renderTags = () => {
    if (!tag_list) {
      return null;
    } else {
      return (
        <div className="tagWrapper">
          {tag_list.map((tag) => {
            return (
              <div>
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
      );
    }
  };
  //Render Rating Function
  const renderRating = () => {
    return rating !== null ? (
      <p className="productParagraph">Rating: {rating} Stars.</p>
    ) : (
      <p className="productParagraph">
        Rating: Unfortunately, there is No Rating Currently Available. Be the
        First To Rate!{" "}
      </p>
    );
  };
  if (
    individualProducts === null ||
    individualProducts === undefined ||
    individualProducts === {} ||
    individualProducts.length === 0
  ) {
    return (
      <section className="individualContentProductPage">
        <div className="wrapper">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  } else {
    return (
      <section className="individualContentProductPage">
        <div className="wrapper">
          <div className="uppperContent">
            <div className="imageContainer">
              <img
                src={api_featured_image ? api_featured_image : null}
                alt={`${name}`}
              />
              <img src={image_link ? image_link : null} alt={`${name}`} />
            </div>
            <div className="productInfomation">
              <h3>
                {name} - {product_type}
              </h3>
              <h4>Brought to you by - {brand}</h4>
              <p>${parseFloat(price).toFixed(2)}</p>
              <p>{description}</p>
              <a>{product_link}</a>

              <div className="shipping">
                <p>Same Day Delivery</p>
                <p>Standard Delivery</p>
              </div>
              <div className="basket">
                <select>
                  <option>1</option>
                </select>
                <button>Add to Basket for Standard Shipping</button>
              </div>
            </div>
          </div>

          <div className="bottomContent">{renderColors()}</div>
          <div className="reviewContainer">{renderTags()}</div>
        </div>
      </section>
    );
  }
};
