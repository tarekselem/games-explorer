import { SimpleGrid, Text } from "@chakra-ui/react";
import { CardContainer } from "@shared/components";
import { IGenre } from "@shared/models";
import { GameCard, SkeletonCard } from "./components";
import { useGames } from "./hooks/";

interface Props {
  selectedGenre: IGenre | null;
}

export const GamesGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [...Array(12)];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={3}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skleleton, i) => (
            <CardContainer key={i}>
              <SkeletonCard />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer key={game.id}>
            <GameCard game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
