import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const IndividualProductPageMakeupAPI = () => {
  const [individualProducts, setIndividualProduct] = useState({});
  const itemid = useParams();

  //Auto Scroll User to Top if needed//
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios({
      url: `https://web-production-5976.up.railway.app/https://makeup-api.herokuapp.com/api/v1/products/${itemid.itemid}.json`,
    }).then((response) => {
      setIndividualProduct(response.data);
    });
  }, [itemid.itemid]);
  //Destructure the passed props of indidvualproducts
  const {
    api_featured_image,
    description,
    product_link,
    brand,
    name,
    rating,
    tag_list,
    product_colors,
    price,
  } = individualProducts;

  return (
    <section>
      <div className="wrapper">
        <div className="uppperContent">
          <img
            src={api_featured_image ? api_featured_image : null}
            alt={`${name}`}
          />
        </div>
        <div className="productInfomation">
          <h3>{name}</h3>
          <h4>Brought to you by - {brand}</h4>
        </div>
      </div>
    </section>
  );
};
