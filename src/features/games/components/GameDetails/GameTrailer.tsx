import { Spinner } from "@chakra-ui/react";
import useMovies from "../../hooks/useMovies";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useMovies(gameId);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  const trailer = data[0];
  return (
    <>
      {trailer && (
        <video src={trailer.data[480]} poster={trailer.preview} controls />
      )}
    </>
  );
};

export default GameTrailer;
