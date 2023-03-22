import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../lib/api-client";

interface FetchDataResponse<TEntity> {
  count: number;
  results: TEntity[];
}

export const useData = <TEntity>(endpoint: string) => {
  const [data, setData] = useState<TEntity[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchDataResponse<TEntity>>(endpoint, { signal: controller.signal })
      .then(({ data }) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
