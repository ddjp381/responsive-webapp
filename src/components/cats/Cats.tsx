import { useEffect, useState } from "react";
import URL from "../../constants/URLs";
import useApi from "../../hooks/useApi";
import { getDefaultOptions } from "../../hooks/defaultOptions";
import CatsRow from "./CatsRow";
import "./Cats.css";


interface CatDetails {
  name: string
}

interface Response {
  config: Object,
  data: CatDetails[]
}

interface CatBreeds {
  setRequest: Function,
  response: Response | null,
  isLoading: Boolean,
  error: any
}


const Cats = () => {
  const getCatBreeds: CatBreeds = useApi();
  const [data, setData] = useState<string[]>([]);

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

  useEffect(() => {
    return setData(getCatBreeds.response?.data.reduce((acc: string[], obj: CatDetails) => [...acc, obj.name], []) || []);
  }, [getCatBreeds.response]);

  const handleDelete = (index: number) => {
    setData((prevData: string[]) => {
      const _data: string[] = [...prevData];
      if (index > -1) {
        _data.splice(index, 1);
      }
      return [..._data];
    });
  };

  const handleEdit = (editedValue: string, index: number) => {
    setData((prevData: string[]) => {
      const _data: string[] = [...prevData];
      if (index > -1) {
        _data[index] = editedValue;
      }
      return [..._data];
    });
  };

  return <div className="Cats App-Container">
    <h2>List of Cat Names</h2>
    <div className="Cats-Row-Container">
      {
        data?.map((name: string, index: number) =>
          <CatsRow
            name={name}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            index={index}
          />
        )
      }
    </div>
  </div>;
};

export default Cats;
