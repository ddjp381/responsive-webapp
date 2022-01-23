import { useEffect } from "react";
import URL from "../../constants/URLs";
import useApi from "../../hooks/useApi";
import { getDefaultOptions } from "../../hooks/defaultOptions";
import "./Cats.css";

const Cats = () => {
  const getCatBreeds = useApi();

  useEffect(() => {
    getCatBreeds.setRequest({
      url: URL.getCatBreeds,
      options: {
        ...getDefaultOptions,
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }, []);

  return <div className="Cats">Cats</div>;
};

export default Cats;
