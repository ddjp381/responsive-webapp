import axios from "axios";
import { useEffect, useState } from "react";

interface ApiRequest {
  url: string;
  options: Object;
}

const useApi = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Array<string> | null>(null);
  const [request, setRequest] = useState<ApiRequest | null>(null);

  useEffect(() => {
    const asyncUseEffect = async () => {
      setLoading(true);
      setError(null);
      setResponse(null);

      try {
        const data = await axios(request!.url, request!.options);
        if (data.status === 200 || data.status === 201) {
          setResponse(data);
        } else {
          throw new Error(data);
        }
      } catch (respError) {
        console.error({ respError });
        setError(respError);
      } finally {
        setLoading(false);
      }
    };

    if (request) {
      asyncUseEffect();
    }
  }, [request]);

  return { isLoading, response, error, setRequest };
};

export default useApi;
