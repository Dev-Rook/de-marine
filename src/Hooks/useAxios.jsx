import { useState, useEffect, useCallback } from "react";
import Axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      const Result = await Axios.get(url);
      setData(Result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(true);
    }
  }, [url]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return { data, loading, error, getApiData };
};

export default useAxios;
