import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./gameCard/GameCard";
import useGames from "../hooks/useGames";

export const GameGrid = () => {
  const { data, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
