import {
  HStack,
  List,
  ListItem,
  Image,
  SkeletonText,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { getCroppedImageUrl } from "@shared/utils/image-url";
import { useSearchQueryStore } from "@shared/hooks";
import { IGenre } from "@shared/models";
import { useGenres } from "./hooks";

export const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  const [genreId, setGenreId] = useSearchQueryStore(
    (store) => [store.searchQuery.genreId, store.setGenreId],
    shallow
  );
  const skeletons = [...Array(15)];

  const handleSelect = (genre: IGenre) => setGenreId(genre.id);

  if (error) return <></>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skleleton, i) => (
            <ListItem key={i}>
              <SkeletonText />
            </ListItem>
          ))}

        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={8}
                fit="cover"
                alt={genre.name}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => handleSelect(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genreId === genre.id ? "bold" : "normal"}
                colorScheme={genreId === genre.id ? "green" : "normal"}
              >
                <Text fontSize="md">{genre.name}</Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
