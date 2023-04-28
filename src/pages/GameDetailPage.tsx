import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGame } from "@features/games/hooks";
import GameDetails from "@features/games/GameDetails";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return <GameDetails game={data} />;
};

export default GameDetailPage;
