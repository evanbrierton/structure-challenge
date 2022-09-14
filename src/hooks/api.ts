import { useEffect, useState } from "react";

const useApi = (path: string, name = "data") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(path);
        const json = await response.json();
        setData(json);
      } catch {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [path]);

  return { [name]: data, error, loading };
};

export const useStocks = () => useApi("/api/stocks", "stocks");
export const useCoins = () => useApi("/api/coins", "coins");
