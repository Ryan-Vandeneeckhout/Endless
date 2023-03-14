import axios from "axios";
import { useParams } from "react-router-dom";
import ContentItem from "./ContentItem";
import { useEffect } from "react";
import { BrandsMap } from "../makeupMaps/BrandsMap";
import { useState } from "react";

export const ContentPage = () => {
  const itembuttonText = useParams();
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    let urlCode = `https://web-production-5976.up.railway.app/https://makeup-api.herokuapp.com/api/v1/products.json`;
    let paramsAPI;

    if (BrandsMap.includes(itembuttonText.itembuttonText)) {
      paramsAPI = {
        brand: itembuttonText.itembuttonText,
      };
    } else {
      paramsAPI = {
        product_type: itembuttonText.itembuttonText,
      };
    }

    var config = {
      method: "get",
      url: urlCode,
      params: paramsAPI,
    };

    axios(config)
      .then(function (response) {
        setDataResponse(response.data);
        console.log(response.data);
        setError(false);
      })
      .catch(function (error) {
        setError(true);
      });
  }, [itembuttonText.itembuttonText]);

  const renderResultsLength = () => {
    if (error === true);
    else if (dataResponse === [] || dataResponse === undefined) {
      return;
    } else {
      return <p className="resultsReturned">{dataResponse.length} Results</p>;
    }
  };

  const renderCatogoryName = () => {
    if (itembuttonText.itembuttonText === (undefined || null)) {
      return <h2>Endless Demands All Products</h2>;
    } else {
      let i = itembuttonText.itembuttonText.replaceAll("_", " ");
      return <h2>{i}</h2>;
    }
  };

  const renderContentAPI = () => {
    if (error === true) {
      return <h3 className="resultsErrorHeading">No Results Found</h3>;
    } else if (dataResponse === [] || dataResponse === undefined) {
      return (
        <h3 className="resultsErrorHeading">
          No Results Found for the Current Selection
        </h3>
      );
    } else if (dataResponse.length > 0) {
      return (
        <>
          {dataResponse.map((item, index) => {
            return (
              <li key={index}>
                <ContentItem
                  index={index}
                  itemid={item.id}
                  itemname={item.name}
                  itemImage_url={item.api_featured_image}
                  itemRating={item.rating}
                  itemProductType={item.product_type}
                  itemBrand={item.brand}
                  price={item.price}
                />
              </li>
            );
          })}
        </>
      );
    }
  };
  return (
    <section className="contentPageSection">
      <div className="bannerContent">{renderCatogoryName()}</div>
      <div className="wrapper">
        <section className="contentReturned">
          <div className="contentWrapper">
            {renderResultsLength()}
            <ul className="contentList">{renderContentAPI()}</ul>
          </div>
        </section>
      </div>
    </section>
  );
};
