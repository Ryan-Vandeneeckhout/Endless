import axios from "axios";
import { useParams } from "react-router-dom";
import ContentItem from "./ContentItem";
import { useEffect } from "react";
import { BrandsMap } from "../makeupMaps/BrandsMap";
import useState from "react-usestateref";
import { ContentSideMenu } from "./contentSideMenu/contentSideMenu";
import { ScrollupButton } from "../inputs/ScrollupButton";

export const ContentPage = () => {
  const itembuttonText = useParams();
  const [error, setError] = useState(null);
  const [, setPriceSort, sortPriceRef] = useState("");
  const [dataResponse, setDataResponse, dataResponseRef] = useState([]);
  const [, setBrandState, brandStateRef] = useState("");
  const [, setProductTypeState, productTypeStateRef] = useState("");
  const [, , productCatgorySelectedRef] = useState("");
  const [, setPrice, priceRef] = useState("");
  const [, setTagsArray, TagsArrayRef] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        setError(false);
      })
      .catch(function () {
        setError(true);
      });
  }, [itembuttonText.itembuttonText, setDataResponse]);

  const QueryAPIdata = () => {
    let urlCode = `https://web-production-5976.up.railway.app/https://makeup-api.herokuapp.com/api/v1/products.json`;

    let paramsAPI;

    if (BrandsMap.includes(itembuttonText.itembuttonText)) {
      setBrandState(itembuttonText.itembuttonText);
    } else {
      setProductTypeState(itembuttonText.itembuttonText);
    }

    paramsAPI = {
      product_type: `${productTypeStateRef.current}`,
      brand: `${brandStateRef.current}`,
      price_less_than: `${priceRef.current}`,
      product_category: `${productCatgorySelectedRef.current}`,
      product_tags: `${TagsArrayRef.current}`,
    };

    var config = {
      method: "get",
      url: urlCode,
      params: paramsAPI,
    };

    axios(config)
      .then(function (response) {
        setDataResponse(response.data);
        setError(false);
      })
      .catch(function () {
        setError(true);
      });
  };

  const handlePriceSortOption = () => {
    const copyOfProducts = dataResponse;
    if (sortPriceRef.current === "false") {
      copyOfProducts.sort((a, b) => Number(a.price) - Number(b.price));
      setDataResponse([...copyOfProducts]);
      renderContentAPI();
    } else if (sortPriceRef.current === "true") {
      copyOfProducts.sort((a, b) => Number(b.price) - Number(a.price));
      setDataResponse([...copyOfProducts]);
      renderContentAPI();
    }
  };
  const DataLengthResultsText = (props) => {
    return <p className="resultsReturned">{props.text}</p>;
  };
  const renderResultsLength = () => {
    let text = "";

    if (error === true) {
      text = "Error: Something went wrong";
      return <DataLengthResultsText text={text} />;
    } else if (dataResponse === [] || dataResponse === undefined) {
      text = "No Results Found";
      return <DataLengthResultsText text={text} />;
    } else if (dataResponse.length === 0) {
      text = "Searching for Results...";
      return <DataLengthResultsText text={text} />;
    } else {
      text = `${dataResponse.length} Results`;
      return <DataLengthResultsText text={text} />;
    }
  };

  const renderCatogoryName = () => {
    let headingText = "Endless Demands All Products";
    if (itembuttonText.itembuttonText === (undefined || null)) {
      return <h2>{headingText}</h2>;
    } else {
      headingText = itembuttonText.itembuttonText.replaceAll("_", " ");
      return <h2>{headingText}</h2>;
    }
  };

  const renderScrollbar = () => {
    if (error === true);
    else if (
      dataResponseRef.current === [] ||
      dataResponseRef.current === undefined
    );
    else if (dataResponseRef.current.length > 10) {
      return <ScrollupButton />;
    }
  };

  const renderContentAPI = () => {
    if (error === true) {
      return <h3 className="resultsErrorHeading">No Results Found</h3>;
    } else if (
      dataResponseRef.current === [] ||
      dataResponseRef.current === undefined
    ) {
      return (
        <h3 className="resultsErrorHeading">
          No Results Found for the Current Selection
        </h3>
      );
    } else if (dataResponseRef.current.length > 0) {
      return (
        <>
          {dataResponseRef.current.map((item, index) => {
            return (
              <li key={index}>
                <ContentItem
                  index={index}
                  itemid={item.id}
                  objectItem={{
                    id: item.id,
                    name: item.name,
                    api_featured_image: item.api_featured_image,
                    rating: item.rating,
                    brand: item.brand,
                    product_type: item.product_type,
                    price: item.price,
                    product_colors: item.product_colors,
                    image_link: item.image_link,
                    description: item.description,
                    product_link: item.product_link,
                    website_link: item.website_link,
                    tag_list: item.tag_list,
                  }}
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
      <div className="bannerContent">
        <div className="wrapperContent">{renderCatogoryName()}</div>
      </div>
      <nav></nav>
      <div className="wrapper">
        <ContentSideMenu
          header={itembuttonText.itembuttonText}
          QueryAPIdata={QueryAPIdata}
          setBrandState={setBrandState}
          setPrice={setPrice}
          handlePriceSortOption={handlePriceSortOption}
          setPriceSort={setPriceSort}
          APIDATA={dataResponseRef.current}
          setTagsArray={setTagsArray}
          TagsArrayRef={TagsArrayRef.current}
        />
        <section className="contentReturned">
          <div className="contentWrapper">
            {renderResultsLength()}
            <ul className="contentList">{renderContentAPI()}</ul>
          </div>
          {renderScrollbar()}
        </section>
      </div>
    </section>
  );
};
