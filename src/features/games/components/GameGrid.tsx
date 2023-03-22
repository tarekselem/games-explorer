import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export const GameGrid = () => {
  const { data, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
