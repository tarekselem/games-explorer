import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CardContainer } from "@shared/components";
import { IGenre } from "@shared/models";
import { useState } from "react";
import {
  GameCard,
  SkeletonCard,
  PlatformSelector,
  SortSelector,
} from "./components";
import { IPlatform } from "./games-model";
import { useGames } from "./hooks/";

interface Props {
  selectedGenre: IGenre | null;
}

export const GamesGrid = ({ selectedGenre }: Props) => {
  // TODO: move to GameQuery state
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
    null
  );
  const [selectedSortOrder, setSelectedSortOrder] = useState("");

  const { data, error, isLoading } = useGames({
    selectedGenre,
    selectedPlatform,
    selectedSortOrder,
  });

  // TODO: move to a generic skeleton componenet
  const skeletons = [...Array(12)];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex paddingLeft={2} marginBottom={5}>
        <Box marginRight={5}>
          <PlatformSelector
            onSelect={(platform) => setSelectedPlatform(platform)}
          />
        </Box>
        <SortSelector onSelect={(order) => setSelectedSortOrder(order)} />
      </Flex>
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
