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

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data }) => setGames(data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data: games, error };
};

export default useGames;
