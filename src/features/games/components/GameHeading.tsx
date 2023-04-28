import { Heading } from "@chakra-ui/react";
import { CACHE_KEYS } from "@shared/constants";
import { useSearchQueryStore, useStateLookup } from "@shared/hooks";
import { IGenre, IPlatform } from "@shared/models";

export const GameHeading = () => {
  const { searchQuery } = useSearchQueryStore();
  const genre = useStateLookup<IGenre>(CACHE_KEYS.GENRES, searchQuery.genreId!);
  const platform = useStateLookup<IPlatform>(
    CACHE_KEYS.PLATFORMS,
    searchQuery.platformId!
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
