import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardContainer } from "@shared/components";
import { useSearchQueryStore } from "@shared/hooks";
import { GameCard, SkeletonCard, GridHeader } from "./components";
import { useGames } from "./hooks/";

export const GamesGrid = () => {
  const pageSize = useSearchQueryStore((store) => store.searchQuery.pageSize);
  const { data, totalCount, error, isLoading, hasNextPage, fetchNextPage } =
    useGames();

  // TODO: move to a generic skeleton componenet
  const skeletons = [...Array(pageSize)];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <GridHeader />

      <InfiniteScroll
        dataLength={totalCount ?? 0}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding={3}
          spacing={6}
        >
          {isLoading
            ? skeletons.map((skleleton, i) => (
                <CardContainer key={i}>
                  <SkeletonCard />
                </CardContainer>
              ))
            : data?.map((game) => (
                <CardContainer key={game.id}>
                  <GameCard game={game} />
                </CardContainer>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GamesGrid;
