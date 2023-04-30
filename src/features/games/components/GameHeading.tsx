import { Heading } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { CACHE_KEYS } from "@shared/constants";
import { useSearchQueryStore, useStateLookup } from "@shared/hooks";
import { IGenre, IPlatform } from "@shared/models";

export const GameHeading = () => {
  const [platformId, genreId] = useSearchQueryStore(
    (store) => [store.searchQuery.platformId, store.searchQuery.genreId],
    shallow
  );

  const genre = useStateLookup<IGenre>(CACHE_KEYS.GENRES, genreId!);
  const platform = useStateLookup<IPlatform>(CACHE_KEYS.PLATFORMS, platformId!);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
