import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../lib/api-client";

interface FetchDataResponse<TEntity> {
  count: number;
  results: TEntity[];
}

interface IConfigs {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;
  dependencies?: unknown[];
}

export const useData = <TEntity>({
  endpoint,
  requestConfig,
  dependencies,
}: IConfigs) => {
  const [data, setData] = useState<TEntity[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);

      apiClient
        .get<FetchDataResponse<TEntity>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
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
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
