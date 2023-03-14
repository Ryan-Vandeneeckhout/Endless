import axios from "axios";
import { useState } from "react";

export const useAPICall = () => {
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState([]);

  const APICall = (urlCode, paramsAPI) => {
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
  };
  return { error, APICall, dataResponse };
};
