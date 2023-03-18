import axios from "axios";
import useState from "react-usestateref";

export const useAPICall = () => {
  const [error, setError] = useState(null);
  const [, setDataResponse, dataResponseAPIRef] = useState([]);

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
  return { error, APICall, dataResponseAPIRef };
};
