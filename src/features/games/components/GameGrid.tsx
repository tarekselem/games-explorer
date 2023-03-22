import { SimpleGrid, Text } from "@chakra-ui/react";
import { CardContainer } from "src/components";
import { GameCard, SkeletonCard } from "./gameCard";
import useGames from "../hooks/useGames";

export const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [...Array(6)];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="5"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skleleton) => (
            <CardContainer>
              <SkeletonCard />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer>
            <GameCard key={game.id} game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
