import { Instrument, APIResponse } from "@/types/api.d";
import { useEffect, useState } from "react";

export const useApi = <T>(path: string) => {
  const [data, setData] = useState<T[]>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(path);
        const { success, result }: APIResponse<T> = await response.json();
        if (!success) setError(true);
        else setData(result);
      } catch {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [path]);

  return { data, error, loading };
};

export const useStocks = () => useApi<Instrument>("/api/stocks");
export const useCoins = () => useApi<Instrument>("/api/coins");
