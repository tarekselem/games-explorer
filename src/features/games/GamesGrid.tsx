import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CardContainer } from "@shared/components";
import { useSearchActions } from "@shared/hooks";
import {
  GameCard,
  SkeletonCard,
  PlatformSelector,
  SortSelector,
  GameHeading,
} from "./components";
import { useGames } from "./hooks/";

export const GamesGrid = () => {
  const { selectPlatform, setSortOrder } = useSearchActions();
  const { data, error, isLoading, platform, genre, pageSize } = useGames();

  // TODO: move to a generic skeleton componenet
  const skeletons = [...Array(pageSize)];

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading
          query={{
            platformName: platform?.name ?? "",
            gerneName: genre?.name ?? "",
          }}
        />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              onSelect={(platform) => selectPlatform(platform)}
            />
          </Box>
          <SortSelector onSelect={(order) => setSortOrder(order)} />
        </Flex>
      </Box>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={3}
        spacing={6}
      >
        {isLoading
          ? skeletons.map((skleleton) => (
              <CardContainer key={skleleton}>
                <SkeletonCard />
              </CardContainer>
            ))
          : data.map((game) => (
              <CardContainer key={game.id}>
                <GameCard game={game} />
              </CardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
