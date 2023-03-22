import { useEffect, useState } from "react";
import apiClient from "@lib/api-client";
import { IGame } from "../games-model";
import { CanceledError } from "axios";

interface FetchGamesResponse {
  count: number;
  results: IGame[];
}

const useGames = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data: games, error, isLoading };
};

export default useGames;
